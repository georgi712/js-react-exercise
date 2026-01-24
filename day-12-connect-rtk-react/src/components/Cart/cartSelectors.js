export const selectCartItems = state => state.cart.cart;

export const selectTotalItems = state => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const selectTotalPrice = state => state.cart.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
