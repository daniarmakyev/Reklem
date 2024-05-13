import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../actions/mainUsers.action";

export type StateType = {
 currentUser?: null;
  users: UserType[];
  loading: boolean;
};

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
