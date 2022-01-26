import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { timedAlert } from "./alertSlice";

export const createErrand = createAsyncThunk(
  "post/create",
  async ({ title, description, dueDate, priority, project }, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      title,
      description,
      dueDate,
      priority,
      project,
    });

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

export const getProjectErrands = createAsyncThunk(
  "errand/getProjectErrands",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/errand/project/${id}`
      );
      // console.log(res.data);
      return res.data;
    } catch (err) {
      const errors = err.response.data.errors;
      console.error(errors);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const toggleErrandComplete = createAsyncThunk(
  "errand/toggleComplete",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/errand/${id}/toggle`
      );
      // console.log(res.data);
      return res.data;
    } catch (err) {
      const errors = err.response.data.errors;
      console.error(errors);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  errands: [],
  errand: null,
};

const errandSlice = createSlice({
  name: "errands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserErrands.fulfilled, (state, actions) => {
      state.errands = actions.payload;
    });
    builder.addCase(getUserErrands.rejected, (state, actions) => {
      state.errands = [];
    });
    builder.addCase(toggleErrandComplete.fulfilled, (state, actions) => {
      // Find index of errand
      const index = state.errands.findIndex(
        (errand) => errand._id === actions.payload._id
      );
      // Replace errand at index
      state.errands[index] = actions.payload;
    });
    builder.addCase(getProjectErrands.fulfilled, (state, actions) => {
      state.errands = actions.payload;
    });
    builder.addCase(getProjectErrands.rejected, (state, actions) => {
      state.errands = [];
    });
  },
});

// export const {} = errandSlice.actions;

export default errandSlice.reducer;
