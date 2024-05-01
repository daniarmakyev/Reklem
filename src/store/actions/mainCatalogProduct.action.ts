import { createAsyncThunk, Action, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from '../store';

const API = 'http://localhost:8000/product';

export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    color:string;
    miniInfo?:string
    desc: string;
    size:string,
    weight:string,
    material:string
    secondImageUrl:string,
    thirdImageUrl:string,
    fourthImageUrl:string,
  }
  
  export const getProductsCatalog = createAsyncThunk(
    'products/getProductsCatalog',
    async (): Promise<Product[]> => {
      const { data } = await axios.get(API);
      return data;
    }
  );
