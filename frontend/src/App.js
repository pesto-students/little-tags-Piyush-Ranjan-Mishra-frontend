import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageScreen from "./screens/homepage/homepage.screen";
import NavBarComponent from "./components/navbar.component";
import FooterComponent from "./components/footer.component";

function App() {
  return (
    <React.Fragment>
      <Router>
        NavBarComponent
        <Switch>
          <Route exact path="/" component={HomePageScreen} />
          {/* <Route path="/about" component={About} />
          <Route component={NoMatch} /> */}
        </Switch>
        FooterComponent
      </Router>
    </React.Fragment>
  );
}

export default App;
