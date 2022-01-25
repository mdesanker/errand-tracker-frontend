import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { timedAlert } from "./alertSlice";

export const createProject = createAsyncThunk(
  "project/createProject",
  async ({ title, description }, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ title, description });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/project/create",
        body,
        config
      );
      console.log(res.data);
      return res.data;
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) =>
          thunkAPI.dispatch(timedAlert({ ...error, type: "danger" }))
        );
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

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
