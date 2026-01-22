const initialState = {
    cart: [
        { id: 1, name: "Apple", price: 2, quantity: 3 },
        { id: 2, name: "Banana", price: 1, quantity: 5 }
    ],
    lastUpdated: null
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "cart/increment": {
            const exists = state.cart.some(item => item.id === action.payload.id);
            if (!exists) return state;

            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
                lastUpdated: Date.now()
            };
        }

        case "cart/decrement": {
            const item = state.cart.find(item => item.id === action.payload.id);
            if (!item || item.quantity <= 1) return state;

            return {
                ...state,
                cart: state.cart.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                ),
                lastUpdated: Date.now()
            }
        }

        case "cart/remove": {
            const exists = state.cart.some(item => item.id === action.payload.id);
            if (!exists) return state;
            
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
                lastUpdated: Date.now()
            };
        }

        default:
            return state;
    }
};