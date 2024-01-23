import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { setUser, setError } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
