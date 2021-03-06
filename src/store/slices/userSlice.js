import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
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
      const res = await axios.post("/api/user/register", body, config);

      if (res.status === 200) {
        return res.data.token;
      } else {
        return thunkAPI.rejectWithValue(res.data);
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
      const res = await axios.post("/api/user/login", body, config);

      if (res.status === 200) {
        return res.data.token;
      } else {
        return thunkAPI.rejectWithValue(res.data);
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

export const loadUser = createAsyncThunk("user/loadUser", async (thunkAPI) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/user/detail");

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
});

export const getAllUsers = createAsyncThunk("user/getAll", async (thunkAPI) => {
  try {
    const res = await axios.get("/api/user/all");

    return res.data;
  } catch (err) {
    const errors = err.response.data.errors;
    console.error(errors);
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const sendFriendRequest = createAsyncThunk(
  "user/sendFriendRequest",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.put(`/api/user/sendrequest/${id}`);

      if (res.status === 200) {
        thunkAPI.dispatch(
          timedAlert({ msg: "Friend request sent", type: "success" })
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

export const acceptFriendRequest = createAsyncThunk(
  "user/acceptRequest",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.put(`/api/user/acceptrequest/${id}`);

      if (res.status === 200) {
        thunkAPI.dispatch(
          timedAlert({ msg: "Request accepted", type: "success" })
        );
        // console.log(res.data);
        return res.data;
      }
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) =>
          thunkAPI.dispatch(timedAlert({ ...errors, type: "danger" }))
        );
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const declineFriendRequest = createAsyncThunk(
  "user/declineRequest",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.put(`/api/user/declinerequest/${id}`);

      if (res.status === 200) {
        thunkAPI.dispatch(
          timedAlert({ msg: "Request declined", type: "info" })
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

export const unfriendUser = createAsyncThunk(
  "user/unfriend",
  async ({ id }, thunkAPI) => {
    try {
      const res = await axios.put(`/api/user/unfriend/${id}`);

      if (res.status === 200) {
        thunkAPI.dispatch(timedAlert({ msg: "User unfriended", type: "info" }));
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

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  users: [],
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
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, actions) => {
      localStorage.setItem("token", actions.payload);
      state.token = actions.payload;
      state.isAuthenticated = true;
      state.loading = false;
    });
    builder.addCase(registerUser.rejected, (state, actions) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
      state.users = [];
    });
    builder.addCase(loginUser.fulfilled, (state, actions) => {
      localStorage.setItem("token", actions.payload);
      state.token = actions.payload;
      state.isAuthenticated = true;
      state.loading = false;
    });
    builder.addCase(loginUser.rejected, (state, actions) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
      state.users = [];
    });
    builder.addCase(loadUser.fulfilled, (state, actions) => {
      state.user = actions.payload;
      state.isAuthenticated = true;
      state.loading = false;
    });
    builder.addCase(loadUser.rejected, (state, actions) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
      state.users = [];
    });
    builder.addCase(getAllUsers.fulfilled, (state, actions) => {
      state.users = actions.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, actions) => {
      state.users = [];
    });
    builder.addCase(sendFriendRequest.fulfilled, (state, actions) => {
      state.user = actions.payload;
    });
    builder.addCase(acceptFriendRequest.fulfilled, (state, actions) => {
      state.user = actions.payload;
    });
    builder.addCase(declineFriendRequest.fulfilled, (state, actions) => {
      state.user = actions.payload;
    });
    builder.addCase(unfriendUser.fulfilled, (state, actions) => {
      state.user = actions.payload;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
