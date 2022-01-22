import { Fragment } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Fragment>
  );
};

export default App;
