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
