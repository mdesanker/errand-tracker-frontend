import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const timedAlert = (error) => (dispatch) => {
  const id = uuidv4();

  dispatch(setAlert({ ...error, id }));

  setTimeout(() => {
    dispatch(removeAlert(id));
  }, 3000);
};

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
