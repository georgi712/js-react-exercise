const cart = [
  { id: 1, name: "Apple", price: 2, quantity: 3 },
  { id: 2, name: "Banana", price: 1, quantity: 5 },
  { id: 3, name: "Orange", price: 3, quantity: 1 }
];

// Task 1

const getCartTotal = (cart) => cart.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

console.log(getCartTotal(cart));

// Task 2 

const getCartSummary = (cart) => {
    return cart.reduce((newObj, item) => {
        newObj.itemsCount = (newObj.itemsCount || 0) + item.quantity;
        newObj.totalPrice = (newObj.totalPrice || 0) + item.quantity * item.price;
        return newObj
    }, {})
}

console.log(getCartSummary(cart));

// Task 3

const getExpensiveItems = (cart, minPrice) => cart.filter(item => item.price >= minPrice);

console.log(getExpensiveItems(cart, 3));

// Bonus
// 1. totalPrice shouldn't be stored in a state because it must be derived from another state and storing derived state creates two sources of truth. When cart changes, totalPrice can become stale or inconsistent. It depends on the change of that state if the calculations become harder to calculate we can use useMemo and calculate the value only when we change the cart state
// 2. If we mutate the items directly the refrence to them wouldn't change and React wouldn't know if it has to make a rerender. React compares references to detect changes. Mutating existing objects preserves the reference, so React may skip rerenders or memoized selectors may return stale values.
// 3. I didn't even saw the last question but i think i acsidentally answered to it in the first question when when the derived value is expensive to compute it may be better to use useMemo because it will calculate the value only when the state changes but only if inputs change less frequently than renders Otherwise, useMemo adds unnecessary complexity.