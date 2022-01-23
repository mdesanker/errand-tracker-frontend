import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { timedAlert } from "./alertSlice";

export const registerUser = createAsyncThunk(
  "user/register",
  async ({ username, email, password }, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ username, email, password });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/register",
        body,
        config
      );

      console.log(res.data);

      if (res.status === 200) {
        return res.data.token;
      } else {
        return thunkAPI.rejectWithValue(res.data);
      }
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => thunkAPI.dispatch(timedAlert(error)));
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/login",
        body,
        config
      );

      console.log(res.data);

      if (res.status === 200) {
        return res.data.token;
      } else {
        return thunkAPI.rejectWithValue(res.data);
      }
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => thunkAPI.dispatch(timedAlert(error)));
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, actions) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, actions) => {
      localStorage.setItem("token", actions.payload);
      state.isAuthenticated = true;
      state.loading = false;
    });
    builder.addCase(registerUser.rejected, (state, actions) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    });
    builder.addCase(loginUser.fulfilled, (state, actions) => {
      localStorage.setItem("token", actions.payload);
      state.isAuthenticated = true;
      state.loading = false;
    });
    builder.addCase(loginUser.rejected, (state, actions) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
