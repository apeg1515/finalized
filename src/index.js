import React from "react";
import ReactDOM from "react-dom";
import asyncComponent from "./components/asyncComponent";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';

import "./styles.css";

const RootApp = asyncComponent(() => import("./components/App"));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootApp />
    </Router>
  </Provider>,
  rootElement
);
