import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  project: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

// export const {} = projectSlice.actions;

export default projectSlice.reducer;
