import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import alertReducer from "./slices/alertSlice";

const store = configureStore({
  reducer: {
    alerts: alertReducer,
    user: userReducer,
  },
});

export default store;
