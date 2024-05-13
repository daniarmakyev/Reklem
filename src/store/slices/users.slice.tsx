import { createSlice } from "@reduxjs/toolkit";
import { StateType, UserType } from "../../helpers/types";



const INIT_STATE: StateType = {
  users: [],
  loading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: INIT_STATE,
  reducers: {
  },
  // extraReducers: (builder) => {
  //   builder
  // },
});
 