const products = [
  { id: 1, name: "Apple", price: 2, featured: false },
  { id: 2, name: "Banana", price: 1, featured: true },
  { id: 3, name: "Orange", price: 3, featured: false },
  { id: 4, name: "Kiwi", price: 4, featured: false }
];

// Task 1

const toggleFeatured = (products, id) => {
    return products.reduce((newArr, currentProduct) => {
        id === currentProduct.id
            ? newArr.push({...currentProduct, featured: !currentProduct.featured})
            : newArr.push(currentProduct)
        return newArr
    }, [])
}

const result = toggleFeatured(products, 1) 
console.log(result === products);
console.log(result[0] === products[0]);
console.log(result[1] === products[1]);

// Task 2 

const getFeaturedProductNames = (products) => {
    return products.reduce((newArr, currentProduct) => {
        currentProduct.featured && newArr.push(currentProduct.name);
        return newArr;
    }, [])
}

console.log(getFeaturedProductNames(result));

// Bonus

const calculateTotalPrice = (products) => {
    return products.reduce((totalPrice, currentProduct) => totalPrice + currentProduct.price, 0)
}

console.log(calculateTotalPrice(products));

// Explanation 
// For the first task the most important thing is to set the intial value an [] and then in the callback to return the accumilator which is the array. We use reduce because it creates a new array and doesn't mutate the old one
// The second task is on the same principal as the first we are just creating a different array structure we are just using the && operator to add the name if featured
// And the bonus is the basic use of reduce we have acc and current value which we are getting from the object and we must start from 0

// Question: Reduce is more powerful because it lets you fully control the accumulator, allowing transformation, filtering, grouping, and aggregation in a single pass, while map and filter are specialized and always return arrays.