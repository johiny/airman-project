import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_URL = "https://api-playground-test.herokuapp.com/products?$limit=15"

const initialState = {
    productsData: {},
    fetchStatus: 'idle',
    error: null
}

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async () => {
    try {
        const response = await axios.get(PRODUCTS_URL)
        return response.data
    } catch (err) {
        return err.message        
    }
})



export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state, action) => {
            state.fetchStatus = 'pending'
        })

        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.fetchStatus = 'fulfilled'
            state.productsData = action.payload
        })

        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.fetchStatus = 'rejected'
            state.error = action.error.message
        })
    }
})

export const selectFetchStatus = (state) => state.products.fetchStatus
export const selectProductsData = (state) => state.products.productsData

export default productsSlice.reducer