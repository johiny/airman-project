import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_URL = "https://api-playground-test.herokuapp.com/products"

const initialState = {
    productsData: [],
    totalProductsCurrentQuery: 0,
    fetchStatus: 'idle',
    error: null,
    firstFetch : true
}

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async () => {
    try {
        const response = await axios.get(`${PRODUCTS_URL}?$limit=25`)
        return response.data
    } catch (err) {
        return err.message        
    }
})

export const fetchCustomProducts = createAsyncThunk('products/fetchCustomProducts', async (params) => {
    try {
        const response = await axios.get(`${PRODUCTS_URL}?$limit=25&${params}`)
        return response.data
    } catch (err) {
        return err.message        
    }
})

export const fetchMoreProducts = createAsyncThunk('products/fetchMoreProducts', async (params) => {
    try {
        const response = await axios.get(`${PRODUCTS_URL}?$limit=25&${params}`)
        return response.data
    } catch (err) {
        return err.message        
    }
})

export const fetchSingleProduct = createAsyncThunk('products/fetchSingleProduct', async (id) => {
    try {
        const response = await axios.get(`${PRODUCTS_URL}/${id}`)
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
            state.productsData = action.payload.data
            state.totalProductsCurrentQuery = action.payload.total
        })

        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.fetchStatus = 'rejected'
            state.error = action.error.message
        })
        builder.addCase(fetchCustomProducts.pending, (state, action) => {
            state.fetchStatus = 'pending'
            state.productsData = []
        })

        builder.addCase(fetchCustomProducts.fulfilled, (state, action) => {
            state.fetchStatus = 'fulfilled'
            state.productsData = action.payload.data
            state.totalProductsCurrentQuery = action.payload.total
        })

        builder.addCase(fetchCustomProducts.rejected, (state, action) => {
            state.fetchStatus = 'rejected'
            state.error = action.error.message
        })

        builder.addCase(fetchMoreProducts.pending, (state, action) => {
            state.fetchStatus = 'pending'
        })

        builder.addCase(fetchMoreProducts.fulfilled, (state, action) => {
            state.fetchStatus = 'fulfilled'
            state.firstFetch = false
            state.productsData = [...state.productsData, ...action.payload.data]
        })

        builder.addCase(fetchMoreProducts.rejected, (state, action) => {
            state.fetchStatus = 'rejected'
            state.error = action.error.message
        })

        builder.addCase(fetchSingleProduct.pending, (state, action) => {
            state.fetchStatus = 'pending'
        })

        builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
            state.fetchStatus = 'fulfilled'
            state.productsData = [action.payload]
        })

        builder.addCase(fetchSingleProduct.rejected, (state, action) => {
            state.fetchStatus = 'rejected'
            state.error = action.error.message
        })
    }
})

export const selectFetchStatus = (state) => state.products.fetchStatus
export const selectProductsData = (state) => state.products.productsData
export const selectTotalProductsCurrentQuery = (state) => state.products.totalProductsCurrentQuery
export const selectIsFirstFetch = (state) => state.products.firstFetch
export const selectTotalProductsInStore = (state) => {
    let total = 0;
    state.products.productsData.forEach(() => total++ )
    return total
}
export const selectSpecificProduct = (state, id) => {
    const product = state.products.productsData.filter((product) => product.id == id)[0]
    return product
}
export default productsSlice.reducer