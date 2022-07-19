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

const advanceRemove = (products, id) => {
    
    for ( let i = 0; i < products.length; i++)
    {
        if(products[i].id == id)
        {
            if(products[i].quantity > 1){
                let productsCopy = Array.from(products)
                productsCopy[i].quantity -= 1 
                return productsCopy
            }
            else{
                return products.filter(product => product.id != id)
            }
        }  
    }

}

const Cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action){
            state.status = "adding"
            state.data = advanceAdd(state.data, action.payload)
            state.status = "idle"
        },
        remove(state, action){
            state.status = "removing"
            state.data = advanceRemove(state.data, action.payload)
            state.status = "idle"
        },
    }

})

export const selectProductsCart = (state) => state.cart.data
export const { add , remove } = Cart.actions
export default Cart.reducer