import { Fragment } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./store/slices/userSlice";
import ProtectedRoute from "./utils/ProtectedRoute";
import CreateErrandForm from "./components/forms/CreateErrandForm";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/createerrand"
          element={
            <ProtectedRoute>
              <CreateErrandForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Fragment>
  );
};

export default App;
