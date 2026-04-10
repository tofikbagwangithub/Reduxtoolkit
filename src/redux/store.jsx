import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice.jsx';
import productsReducer from './productSlice.jsx';


const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer
    }
});
export default store;