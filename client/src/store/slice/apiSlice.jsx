import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { USERS_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: USERS_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
