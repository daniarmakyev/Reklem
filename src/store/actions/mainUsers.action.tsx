import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserType {
  name: string;
  email: string;
  password: string;
  id?: number;
}
