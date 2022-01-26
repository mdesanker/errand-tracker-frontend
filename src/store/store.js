import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import alertReducer from "./slices/alertSlice";
import errandReducer from "./slices/errandSlice";
import projectReducer from "./slices/projectSlice";
import uiReducer from "./slices/uiSlice";

const store = configureStore({
  reducer: {
    alerts: alertReducer,
    user: userReducer,
    errands: errandReducer,
    projects: projectReducer,
    ui: uiReducer,
  },
});

export default store;
