import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setAlert: (state, actions) => {
      state.push(actions.payload);
    },
    removeAlert: (state, actions) => {
      return state.filter((alert) => alert.id !== actions.payload);
    },
  },
  extraReducers: (builder) => {},
});

export const { setAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
