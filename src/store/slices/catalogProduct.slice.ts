import { createSlice } from "@reduxjs/toolkit";
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
    // extraReducers: builder => {
    //     builder
    // },
});
