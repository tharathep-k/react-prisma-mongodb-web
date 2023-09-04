import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../components/slice/auth-slice";
import userReducer from "../user/slice/user-slice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
});

export default store;
