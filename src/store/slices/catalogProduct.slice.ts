import { createSlice } from "@reduxjs/toolkit"
import { getProductsCatalog } from "../actions/mainCatalogProduct.action"

const INIT_STATE = {
    product: [],
    oneProduct: null,
    loading:false,
    error: false,
}

export const catalogProductSlice = createSlice( {
    name: 'products',
    initialState: INIT_STATE,
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(getProductsCatalog.pending, (state, action) => {
            console.log(action);
            state.loading = true})
        .addCase(getProductsCatalog.rejected, (state, action) => {
            console.log(action);
            state.loading = false
            state.error = true})
        .addCase(getProductsCatalog.fulfilled, (state, action) => {
            console.log(action);
            state.product = action.payload
        })
      }
    }
)