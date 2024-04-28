import { createSlice } from "@reduxjs/toolkit";
import { getProductsCatalog } from "../actions/mainCatalogProduct.action";
import { PayloadAction } from "@reduxjs/toolkit";

const INIT_STATE = {
    product: [],
    oneProduct: null,
    loading: false,
    error: false,
}

export const catalogProductSlice = createSlice({
    name: 'products',
    initialState: INIT_STATE,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getProductsCatalog.pending.type, (state, action) => {
                console.log(action);
                state.loading = true;
            })
            .addCase(getProductsCatalog.rejected.type, (state, action: PayloadAction<any>) => {
                console.log(action);
                state.loading = false;
                state.error = true;
            })
            .addCase(getProductsCatalog.fulfilled.type, (state, action: PayloadAction<any>) => {
                console.log(action);
                state.loading = false;
                state.product = action.payload;
            })
    }
});


