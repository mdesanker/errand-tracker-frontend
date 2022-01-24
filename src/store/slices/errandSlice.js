import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
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

export const getUserErrands = createAsyncThunk(
  "errand/getUserErrands",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/errand/user/${id}`
      );
      return res.data;
    } catch (err) {
      const errors = err.response.data;
      console.error(errors);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  posts: [],
  post: null,
};

const errandSlice = createSlice({
  name: "errands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserErrands.fulfilled, (state, actions) => {
      state.posts = actions.payload;
    });
    builder.addCase(getUserErrands.rejected, (state, actions) => {
      state.posts = [];
    });
  },
});

export const {} = errandSlice.actions;

export default errandSlice.reducer;
