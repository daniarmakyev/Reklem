import { createSlice } from "@reduxjs/toolkit";
import { UserType, getCurrentUser, getUsers } from "../actions/mainUsers.action";

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
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload!;
      }).addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload!;
      })
  },
});
