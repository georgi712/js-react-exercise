export const selectCartItems = state => state.cart.cart;

export const selectTotalItems = state => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const selectTotalPrice = state => state.cart.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

/*
1. Why should derived state NOT be stored in Redux?

    Because it can always be calculated from existing state and storing it risks inconsistency and bugs.

2. Why are selectors better than accessing state directly?

    They centralize logic, improve readability, and prepare the app for memoization and performance optimizations.

3. What is Redux responsible for vs React?
    
    Redux: state + state transitions
    React: rendering + local UI state
*/