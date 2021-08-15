import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import containerRoutes from "./common/routes";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          {Object.keys(containerRoutes).map((key, index) => {
            const { path, component, ...extra } = containerRoutes[key];
            return (
              <Route key={index} path={path} component={component} {...extra} />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
