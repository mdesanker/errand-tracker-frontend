import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { timedAlert } from "./alertSlice";
import { getProject, setProject } from "./projectSlice";

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
      const res = await axios.post("/api/errand/create", body, config);

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
      const res = await axios.get(`/api/errand/user/${id}/all`);

      if (res.status === 200) {
        thunkAPI.dispatch(setProject({ _id: "all" }));
        return res.data;
      }
    } catch (err) {
      const errors = err.response.data;
      console.error(errors);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getPersonalErrands = createAsyncThunk(
  "errand/getPersonalErrands",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.get(`/api/errand/user/${id}`);

      if (res.status === 200) {
        thunkAPI.dispatch(setProject({ _id: "personal" }));
        return res.data;
      }
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
      const res = await axios.get(`/api/errand/project/${id}`);
      // console.log(res.data);
      if (res.status === 200) {
        // Load project details into state
        thunkAPI.dispatch(getProject({ id }));
        return res.data;
      }
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
      const res = await axios.put(`/api/errand/${id}/toggle`);
      // console.log(res.data);
      return res.data;
    } catch (err) {
      const errors = err.response.data.errors;
      console.error(errors);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const deleteErrand = createAsyncThunk(
  "errand/delete",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.delete(`/api/errand/${id}/delete`);

      if (res.status === 200) {
        // console.log(res.data);
        thunkAPI.dispatch(
          timedAlert({ msg: "Errand deleted", type: "success" })
        );
        return id;
      }
    } catch (err) {
      const errors = err.response.data.errors;
      console.error(errors);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  errands: [],
};

const errandSlice = createSlice({
  name: "errands",
  initialState,
  reducers: {
    clearErrands: (state, actions) => {
      state.errands = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createErrand.fulfilled, (state, actions) => {
      state.errands.push(actions.payload);
    });
    builder.addCase(getUserErrands.fulfilled, (state, actions) => {
      state.errands = actions.payload;
    });
    builder.addCase(getUserErrands.rejected, (state, actions) => {
      state.errands = [];
    });
    builder.addCase(getPersonalErrands.fulfilled, (state, actions) => {
      state.errands = actions.payload;
    });
    builder.addCase(getPersonalErrands.rejected, (state, actions) => {
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
    builder.addCase(deleteErrand.fulfilled, (state, actions) => {
      state.errands = state.errands.filter(
        (errand) => errand._id !== actions.payload
      );
    });
  },
});

export const { clearErrands } = errandSlice.actions;

export default errandSlice.reducer;
