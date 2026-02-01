export const selectProducts = state => state.products.products;

export const selectProductsLoading = state => state.products.isLoading;

export const selectProductsError = state => state.products.errorMessage;