import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { timedAlert } from "./alertSlice";
import { removeProjectErrands } from "./errandSlice";

export const createProject = createAsyncThunk(
  "project/createProject",
  async ({ title, members }, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ title, members });

    try {
      const res = await axios.post("/api/project/create", body, config);

      if (res.status === 200) {
        thunkAPI.dispatch(
          timedAlert({ msg: "Project created", type: "success" })
        );
        // console.log(res.data);
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

export const getAuthorProjects = createAsyncThunk(
  "project/getAuthorProjects",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.get(`/api/project/author/${id}`);
      // console.log(res.data);
      return res.data;
    } catch (err) {
      const errors = err.response.data.errors;
      console.error(errors);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getMemberProjects = createAsyncThunk(
  "project/getMemberProjects",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.get(`/api/project/member/${id}`);
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
      const res = await axios.get(`/api/project/${id}`);
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
  async ({ id, title, description, members }, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ title, description, members });

    try {
      const res = await axios.put(`/api/project/${id}/update`, body, config);

      if (res.status === 200) {
        thunkAPI.dispatch(
          timedAlert({ msg: "Project updated", type: "success" })
        );
        // console.log(res.data);
        return res.data;
      }
    } catch (err) {
      const errors = err.response.data.errors;
      for (let error of errors) {
        thunkAPI.dispatch(timedAlert({ ...error, type: "danger" }));
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const deleteProject = createAsyncThunk(
  "project/delete",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.delete(`/api/project/${id}/delete`);

      // thunkAPI.dispatch(
      //   timedAlert({ msg: "Project deleted", type: "success" })
      // );
      if (res.status === 200) {
        thunkAPI.dispatch(removeProjectErrands(id));
        return id;
      }
    } catch (err) {
      const errors = err.response.data.errors;
      for (let error of errors) {
        thunkAPI.dispatch(timedAlert({ ...error, type: "danger" }));
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const removeSelfFromProject = createAsyncThunk(
  "project/removeSelf",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.put(`/api/project/${id}/removeself`);

      if (res.status === 200) {
        thunkAPI.dispatch(
          timedAlert({ msg: "Removed from project", type: "info" })
        );
        // console.log(res.data);
        return id;
      }
    } catch (err) {
      const errors = err.response.data.errors;
      for (let error of errors) {
        thunkAPI.dispatch(timedAlert({ ...error, type: "danger" }));
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  author: [],
  member: [],
  project: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    clearProject: (state, actions) => {
      state.project = null;
    },
    setProject: (state, actions) => {
      state.project = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createProject.fulfilled, (state, actions) => {
      state.author = state.author.concat([actions.payload]);
    });
    builder.addCase(getAuthorProjects.fulfilled, (state, actions) => {
      state.author = actions.payload;
    });
    builder.addCase(getAuthorProjects.rejected, (state, actions) => {
      state.author = [];
    });
    builder.addCase(getMemberProjects.fulfilled, (state, actions) => {
      state.member = actions.payload;
    });
    builder.addCase(getMemberProjects.rejected, (state, actions) => {
      state.member = [];
    });
    builder.addCase(getProject.fulfilled, (state, actions) => {
      state.project = actions.payload;
    });
    builder.addCase(getProject.rejected, (state, actions) => {
      state.project = null;
    });
    builder.addCase(updateProject.fulfilled, (state, actions) => {
      // Find index of project that was updated
      const index = state.author.findIndex(
        (project) => project._id === actions.payload._id
      );
      // Replace with updated object
      state.author[index] = actions.payload;
    });
    builder.addCase(deleteProject.fulfilled, (state, actions) => {
      state.author = state.author.filter(
        (project) => project._id !== actions.payload
      );
    });
    builder.addCase(removeSelfFromProject.fulfilled, (state, actions) => {
      state.member = state.member.filter(
        (project) => project._id !== actions.payload
      );
    });
  },
});

export const { clearProject, setProject } = projectSlice.actions;

export default projectSlice.reducer;
