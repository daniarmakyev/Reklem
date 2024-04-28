import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const API = 'http://localhost:8000/product'


export const getProductsCatalog = createAsyncThunk('products/getProductsCatalog', async () => {
    const {data} = await axios.get(API);
    return data
})