import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userToken: null,
  isFirstLaunch: null,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
    setFirstLaunch: (state, action) => {
      state.isFirstLaunch = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default authSlice.reducer;

export const selectUser = (state) => state.auth;

export const { setUser, setUserToken, setFirstLaunch, setLoading } =
  authSlice.actions;
