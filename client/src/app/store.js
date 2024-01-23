// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { api } from "./query"; // Import your API slice

const store = configureStore({
  reducer: {
    user: userReducer,
    [api.reducerPath]: api.reducer, // Add the API slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
