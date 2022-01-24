import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { timedAlert } from "./alertSlice";

export const createErrand = createAsyncThunk(
  "post/create",
  async ({ title, description, dueDate, priority }, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ title, description, dueDate, priority });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/errand/create",
        body,
        config
      );

      // console.log(res.data);
      if (res.status === 200) {
        thunkAPI.dispatch(
          timedAlert({ msg: "Errand created", type: "success" })
        );
        return res.data;
      }
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
  posts: [],
  post: null,
  status: "idle",
};

const errandSlice = createSlice({
  name: "errands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = errandSlice.actions;

export default errandSlice.reducer;
