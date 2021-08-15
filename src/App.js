import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { containerRoutes, componentsRoutes } from "./common/routes";
import "./App.css";

const assignRoutes = (routes) => {
  return Object.keys(routes).map((key, index) => {
    const { path, component, ...extra } = routes[key];
    return (
      <Route key={path + index} path={path} component={component} {...extra} />
    );
  });
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          {assignRoutes(containerRoutes)}
          {assignRoutes(componentsRoutes)}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
