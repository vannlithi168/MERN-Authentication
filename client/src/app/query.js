// src/app/query.js
// src/app/query.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/user" }), // Adjust the base URL accordingly
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (user) => ({ url: "/login", method: "POST", body: user }),
    }),
    registerUser: builder.mutation({
      query: (user) => ({ url: "/register", method: "POST", body: user }),
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = api;
