import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  isLoading: false,
  loggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userSignStart: state => {
      state.isLoading = true;
    },

    userSignSuccess: (state, action) => {
      state.isLoading = false;
      state.loggedIn = true;
      state.user = action.payload;
    },

    userSignFailure: (state, action) => {
      state.error = action.payload;
    },

    userSignOut: state => {
      state.loggedIn = false;
    },
  },
});

export const { userSignStart, userSignSuccess, userSignFailure, userSignOut } = authSlice.actions;
export default authSlice.reducer;
