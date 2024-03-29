import React from "react";
import { hot } from "react-hot-loader/root";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
};

export default hot(App);
