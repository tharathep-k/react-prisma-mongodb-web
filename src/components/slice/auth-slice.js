import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as authApi from "../../api/auth-api";
import { removeAccessToken, setAccessToken } from "../../utils/localstorage";

const initialState = {
  error: null,
  isAuthenticated: false,
  user: null,
};

export const login = createAsyncThunk("auth/login", async (input, thunkApi) => {
  try {
    // console.log("=====", input);
    const res = await authApi.login(input);
    // console.log("----", res.data);
    setAccessToken(res.data.accessToken);
    const resFetchMe = await authApi.fetchMe();
    return resFetchMe.data.user;
  } catch (error) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

export const fetchMe = createAsyncThunk("auth/fetchMe", async (_, thunkApi) => {
  try {
    const res = await authApi.fetchMe();
    return res.data.user;
  } catch (error) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

export const logout = createAsyncThunk("auth/logout", () => {
  removeAccessToken();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isAuthenticated = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
