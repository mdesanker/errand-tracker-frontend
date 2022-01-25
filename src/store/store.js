import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import alertReducer from "./slices/alertSlice";
import errandReducer from "./slices/errandSlice";
import projectReducer from "./slices/projectSlice";

const store = configureStore({
  reducer: {
    alerts: alertReducer,
    user: userReducer,
    errands: errandReducer,
    projects: projectReducer,
  },
});

export default store;
