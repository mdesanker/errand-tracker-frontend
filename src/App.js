import { Fragment, useEffect } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { useSelector } from "react-redux";
import ProtectedRoute from "./utils/ProtectedRoute";
import CreateErrandForm from "./components/forms/CreateErrandForm";
import AlertView from "./components/alerts/AlertView";
import CreateProjectForm from "./components/forms/CreateProjectForm";
import FriendView from "./components/friends/FriendView";
import ProjectView from "./components/projects/ProjectView";
import EditProjectForm from "./components/forms/EditProjectForm";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loadUser } from "./store/slices/userSlice";

axios.defaults.baseURL = "https://errandtracker.herokuapp.com";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const alerts = useSelector((state) => state.alerts);

  return (
    <Fragment>
      <GlobalStyles />
      <AlertView alerts={alerts} />
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
          path="/projects"
          element={
            <ProtectedRoute>
              <ProjectView />
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
        <Route
          path="/createproject"
          element={
            <ProtectedRoute>
              <CreateProjectForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/project/:id"
          element={
            <ProtectedRoute>
              <EditProjectForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/friends"
          element={
            <ProtectedRoute>
              <FriendView />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Fragment>
  );
};

export default App;
