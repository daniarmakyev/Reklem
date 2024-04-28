import { configureStore } from "@reduxjs/toolkit";
import { catalogProductSlice } from "./slices/catalogProduct.slice";

export const store = configureStore({
    reducer: {
        products: catalogProductSlice.reducer
    }
})