import React from "react";
import asyncComponent from "./asyncComponent";
import { Route, Switch } from "react-router-dom";

const DefaultNavbar = asyncComponent(() => import("./Navbars"));
const DashBoardComponent = asyncComponent(() => import("./Dashboard"));

const App = () => {
  return (
    <div className="app-wrapper">
      <DefaultNavbar />
      <div className="app-wrapper_main">
        <Switch>
          <Route path="/" component={DashBoardComponent} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
