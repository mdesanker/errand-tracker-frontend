import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: null,
};

const errandSlice = createSlice({
  name: "errands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = errandSlice.actions;

export default errandSlice.reducer;
