const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    tags: ["electronics", "computer"],
    reviews: [
      { id: 1, rating: 5, text: "Great!" },
      { id: 2, rating: 4, text: "Good value" }
    ]
  },
  {
    id: 2,
    name: "Phone",
    price: 800,
    tags: ["electronics"],
    reviews: [
      { id: 3, rating: 3, text: "Average" }
    ]
  }
];

// Task 1

const getAverageRating = (products, productId) => {
  const product = products.find(p => p.id === productId);
  if (!product || product.reviews.length === 0) return null;

  const sum = product.reviews.reduce(
    (acc, review) => acc + review.rating,
    0
  );

  return sum / product.reviews.length; 
};

console.log(getAverageRating(products, 1));

// Task 2

const updateReviewText = (products, productId, reviewId, newText) => {
    return products.map((product) => {
        const newObj = product.id === productId
            ? {...product, reviews: product.reviews.map((review) => {
                return review.id === reviewId 
                    ? {...review, text: newText}
                    : review
            })}
            : product
        return newObj
    })
}

const updatedProducts = updateReviewText(products, 1, 1, "asdasd");
console.log(updatedProducts[0]);
console.log(products === updatedProducts);
console.log(products[1] === updatedProducts[1]);
console.log(products[0].reviews[0] === updatedProducts[0].reviews[0]);

// Task 3

const removeLowRatedReviews = (products, minRating) => {
    return products.map(product => ({
        ...product,
        reviews: product.reviews.filter(
            review => review.rating >= minRating
        )
    }));
}

console.log(removeLowRatedReviews(products, 4));

// 1.	Why is map + filter + spread sometimes worse than a small mutation inside a reducer?

/*
Because map + filter + spread always creates new arrays and objects,
even when the data did not actually change.

This causes unnecessary allocations and reference changes.
On large datasets, this hurts performance.

A reducer can reuse existing references and only create new objects
for the parts of the data that actually changed.
*/

// 2.	Why is returning the same reference sometimes more important than creating a new object?


/*
React relies on referential equality (===) to detect changes.

If a value has the same reference, React assumes it did not change
and can skip re-renders or memoized computations.

Creating new objects unnecessarily breaks memoization and causes
extra re-renders, even when the visible data is the same.
*/ 

// 3.	What exact bug appears in React if Task 2 is implemented with mutation?

/*
If the review object is mutated directly, its reference does not change.

React will think nothing changed and may:
- skip re-rendering components
- reuse stale memoized values
- display outdated UI

This leads to stale data bugs where the state is updated
but the UI does not reflect the change.
*/
