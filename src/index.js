import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <HashRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById("app")
);
