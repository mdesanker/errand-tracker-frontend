import { Fragment } from "react";
import GlobalStyles from "./theme/GlobalStyles";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <h1>Hello, world!</h1>
      <Routes></Routes>
    </Fragment>
  );
};

export default App;
