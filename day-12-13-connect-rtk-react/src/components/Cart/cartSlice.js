import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  try {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      return JSON.parse(storedCart);
    }
  } catch (error) {
    console.error("Failed to load cart from storage", error);
  }
  return [];
};

const initialState = {
  cart: loadCartFromStorage(),
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
    },
    addToCart(state, action) {
      const product = action.payload;

      const existingItem = state.cart.find(
        item => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({
          ...product,
          quantity: 1
        });
      }

      state.lastUpdated = Date.now();
    }
  }
});

export const {
  incrementItem,
  decrementItem,
  removeItem,
  addToCart
} = cartSlice.actions;

export default cartSlice.reducer;
