import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./screens/homepage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/about" component={About} />
          <Route component={NoMatch} /> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
