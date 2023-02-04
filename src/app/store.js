import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../Redux/Slices/productsSlice'
import cartReducer from "../Redux/Slices/cartSlice";
import formReducer from "../Redux/Slices/formSlice"


const savedState = localStorage.getItem('state');
const preloadedState = savedState ? JSON.parse(savedState) : undefined;

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart : cartReducer,
        form: formReducer
    },
   preloadedState: preloadedState
})

window.addEventListener('beforeunload', (e) => {
    const state = store.getState();
    if(state.products.hasOwnProperty('productsData')){
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
  });