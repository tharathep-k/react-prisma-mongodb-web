import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as userApi from "../../api/user-api";

const initialState = {
  error: null,
  userData: [],
};

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (_, thunkApi) => {
    try {
      const res = await userApi.getUserData();
      console.log(".....");
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id, thunkApi) => {
    try {
      //   console.log(id);
      await userApi.deleteUser(id);
    } catch (error) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const editUser = createAsyncThunk(
  "user/editUser",
  async (input, thunkApi) => {
    try {
      const res = await userApi.editUser(input);
      console.log(res.data);
    //   return res.data
    } catch (error) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
