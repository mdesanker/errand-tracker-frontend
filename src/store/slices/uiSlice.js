import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  edit: false,
};

const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleEdit: (state, actions) => {
      state.edit = !state.edit;
    },
  },
  extraReducers: (builder) => {},
});

export const { toggleEdit } = UISlice.actions;

export default UISlice.reducer;
