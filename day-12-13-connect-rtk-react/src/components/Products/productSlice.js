import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductsApi } from "../../api/productsApi.js";

const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async () => {
        const response = await fetchProductsApi();
        return response;
    }
)

const initialState = {
    products: [],
    isLoading: false,
    errorMessage: null
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.errorMessage = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = action.error.message || "Failed to fetch!"
            })
    }
});

export { fetchProducts }

export default productsSlice.reducer;
