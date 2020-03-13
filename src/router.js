import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import About from "./components/About";

const routes = () => (
  <Router>
    <Switch>
      <Route path="/">
        <App />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  </Router>
);

export default routes;
