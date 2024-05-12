import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export interface UserType {
    name: string;
    email: string;
    password: string;
    id?: number;
  }


  // export const registerUser = createAsyncThunk(
  //   "users/registerUser",
  //   async (user: UserType) => {
  //     try {
  //       await axios.post(API, user); 
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // );
  

  // export const getUsers = createAsyncThunk("users/getUsers", async () => {
  //   try {
  //     console.log(window.location.search);
  
  //     const { data } = await axios.get(API);
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

  // export const getCurrentUser = createAsyncThunk(
  //   "users/getCurrentUser",
  //   async (id: string | number) => {
  //     try {
  //       const { data } = await axios.get(`${API}/${id}`);
  //       return data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // );