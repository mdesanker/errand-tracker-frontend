import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "normal",
};

const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMode: (state, actions) => {
      state.mode = actions.payload;
    },
  },
  extraReducers: (builder) => {},
});

// export const {} = UISlice.actions;

export default UISlice.reducer;
