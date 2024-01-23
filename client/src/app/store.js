import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { api } from "./query";

const store = configureStore({
  reducer: {
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
