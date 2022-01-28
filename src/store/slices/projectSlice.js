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

      if (res.status === 200) {
        thunkAPI.dispatch(
          timedAlert({ msg: "Project created", type: "success" })
        );
        console.log(res.data);
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

export const getUserProjects = createAsyncThunk(
  "project/getAllProjects",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/project/user/${id}`
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

export const getProject = createAsyncThunk(
  "project/getProject",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/project/${id}`);
      // console.log(res.data);
      return res.data;
    } catch (err) {
      const errors = err.response.data.errors;
      console.error(errors);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const updateProject = createAsyncThunk(
  "project/update",
  async ({ id, title, description }, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ id, title, description });

    try {
      const res = await axios.put(
        `http://localhost:5000/api/project/${id}/update`,
        body,
        config
      );

      if (res.status === 200) {
        thunkAPI.dispatch(
          timedAlert({ msg: "Project updated", type: "success" })
        );
        console.log(res.data);
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
  projects: [],
  project: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    clearProject: (state, actions) => {
      state.project = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserProjects.fulfilled, (state, actions) => {
      state.projects = actions.payload;
    });
    builder.addCase(getUserProjects.rejected, (state, actions) => {
      state.projects = [];
    });
    builder.addCase(getProject.fulfilled, (state, actions) => {
      state.project = actions.payload;
    });
    builder.addCase(getProject.rejected, (state, actions) => {
      state.project = null;
    });
    builder.addCase(updateProject.fulfilled, (state, actions) => {
      // Find index of project that was updated
      const index = state.projects.findIndex(
        (project) => project._id === actions.payload._id
      );
      // Replace with updated object
      state.projects[index] = actions.payload;
    });
  },
});

export const { clearProject } = projectSlice.actions;

export default projectSlice.reducer;
