import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    { id: 1, name: "Apple", price: 2, quantity: 3 },
    { id: 2, name: "Banana", price: 1, quantity: 5 }
  ],
  lastUpdated: null
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementItem(state, action) {
      const item = state.cart.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.lastUpdated = Date.now();
      }
    },
    decrementItem(state, action) {
      const item = state.cart.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.lastUpdated = Date.now();
      }
    },
    removeItem(state, action) {
      state.cart = state.cart.filter(
        item => item.id !== action.payload
      );
      state.lastUpdated = Date.now();
    }
  }
});

export const {
  incrementItem,
  decrementItem,
  removeItem
} = cartSlice.actions;

export default cartSlice.reducer;

/*
1. Why is mutation safe in RTK but NOT safe in React state?

Mutation is safe in Redux Toolkit because RTK uses Immer internally.
Immer tracks all mutations and produces a new immutable state behind the scenes.
This means we can write "mutating" code while still preserving immutability.

React state updates do NOT use Immer by default.
If we mutate React state directly, the reference does not change, so React cannot
detect updates reliably, leading to missed renders or stale UI.
*/


/*
2. What problem does Immer solve that your Day 10 reducer had?

Immer removes the need to manually:
- copy objects and arrays
- check whether something changed
- manage reference equality
- prevent accidental mutations

In the Day 10 reducer, we had to:
- check if an item exists
- create new arrays conditionally
- manually update lastUpdated only when changes happened

Immer automatically:
- tracks whether state changed
- creates new references only where needed
- preserves unchanged references
- eliminates most boilerplate and error-prone logic
*/


/*
3. Why is "returning state" rarely needed in RTK reducers?

In RTK reducers, we usually mutate the draft state instead of returning a new one.
Immer will return either:
- a new state if mutations occurred, or
- the original state if nothing changed

Returning state explicitly is only needed when:
- you want to replace the entire state object
- you return a completely new value (e.g. state = initialState)

In most cases, simply mutating the draft is enough and clearer.
*/