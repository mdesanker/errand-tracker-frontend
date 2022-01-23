import { Fragment } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Fragment>
  );
};

export default App;
