import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import productsReducer from "../Products/productSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer
    }
})

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart.cart));
})
