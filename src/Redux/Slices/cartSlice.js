import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    status: "idle",
    error: null
}

const advanceAdd = (products, newProduct) => {
    
    for ( let i = 0; i < products.length; i++)
    {
        if(products[i].id == newProduct.id)
        {
            let productsCopy = Array.from(products)
            productsCopy[i].quantity += 1 
            return productsCopy
        }  
    }

    return [...products, {...newProduct, quantity : 1}]
}

const Cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action){

            state.data = advanceAdd(state.data, action.payload)
        },
        remove(state, action){
            state.data = state.date.filter((product) => product.id != action.payload)
        }
    }

})

export const selectProductsCart = (state) => state.cart.data
export const { add , remove } = Cart.actions
export default Cart.reducer