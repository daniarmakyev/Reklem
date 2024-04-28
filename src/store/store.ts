import { configureStore } from "@reduxjs/toolkit";
import { catalogProductSlice } from "./slices/catalogProduct.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: {
        products: catalogProductSlice.reducer
    }
});

export const useAppDispatch = () => useDispatch<AppDispatch>();