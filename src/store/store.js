import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import alertReducer from "./slices/alertSlice";
import errandReducer from "./slices/errandSlice";

const store = configureStore({
  reducer: {
    alerts: alertReducer,
    user: userReducer,
    errands: errandReducer,
  },
});

export default store;
