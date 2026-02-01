export const selectCartItems = state => state.cart.cart;

export const selectTotalItems = state => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const selectTotalPrice = state => {
    console.log("Recomputing total price");    
    return state.cart.cart.reduce((sum, item) => sum + item.quantity * item.price, 0)
};

// export const selectCartLoading = state => state.cart.isLoading;

// export const selectCartError = state => state.cart.errorMessage;

/*
1. Why should derived state NOT be stored in Redux?

    Because it can always be calculated from existing state and storing it risks inconsistency and bugs.

2. Why are selectors better than accessing state directly?

    They centralize logic, improve readability, and prepare the app for memoization and performance optimizations.

3. What is Redux responsible for vs React?
    
    Redux: state + state transitions
    React: rendering + local UI state
*/

// Day 14 

/*
1. Why should derived data NOT be stored in Redux state?

    Derived data should not be stored in Redux state because
   it can be computed from existing state. Storing it causes
   duplication, risks stale or inconsistent data, and breaks
   the single source of truth principle.

2. When does a normal selector recompute?

    A normal selector recomputes its result every time the
   component re-renders, even if the underlying state
   has not changed.

3. What problem does createSelector solve?
    
    createSelector solves the problem of unnecessary
   recomputation by memoizing derived data and reusing
   the previous result when input references are unchanged.

4. Why is reference equality critical for memoization?

    Memoization depends on reference equality (===).
   If the input references are the same, the cached result
   can be reused safely; if not, recomputation is required.
*/
