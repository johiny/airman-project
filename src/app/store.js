import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../Redux/Slices/productsSlice'
import cartReducer from "../Redux/Slices/cartSlice";
import formReducer from "../Redux/Slices/formSlice"

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart : cartReducer,
        form: formReducer
    }
})