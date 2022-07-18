import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    status: "idle",
    error: null
}
const Cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action){

            state.data = [...state.data, action.payload]
        },
        remove(state, action){
            state.data = state.date.filter((product) => product.id != action.payload)
        }
    }

})

export const selectProductsCart = (state) => state.cart.data
export const { add , remove } = Cart.actions
export default Cart.reducer