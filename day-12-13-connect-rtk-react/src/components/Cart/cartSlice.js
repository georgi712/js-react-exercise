import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductsApi } from "../../api/productsApi.js";

const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async () => {
    const response = await fetchProductsApi();
    return response
  }
)

const initialState = {
  cart: [],
  isLoading: false,
  errorMessage: null,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload.map(p => ({
          ...p,
          quantity: 1
        }))
        state.lastUpdated = Date.now();
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message || "Failed to fetch!"
      })
  }
});

export const {
  incrementItem,
  decrementItem,
  removeItem
} = cartSlice.actions;

export { fetchProducts }

export default cartSlice.reducer;
