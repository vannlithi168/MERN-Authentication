import { USERS_URL } from "../constants";
import { apiSlice } from "../slice/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        credentials: "include",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation } = usersApiSlice;
