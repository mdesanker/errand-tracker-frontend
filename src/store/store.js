import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import alertReducer from "./slices/alertSlice";

const store = configureStore({
  reducer: {
    alert: alertReducer,
    user: userReducer,
  },
});

export default store;
