import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageScreen from "./pages/homepage/homepage.screen";
import NavBarComponent from "./components/navbar.component";
import FooterComponent from "./components/footer.component";
import LoginPage from "./pages/signup/signup.page";
import NoMatchPage from "./pages/noMatch.page";

function App() {
  return (
    <React.Fragment>
      <Router>
        NavBarComponent
        <Switch>
          <Route exact path="/" component={HomePageScreen} />
          <Route path="/login" component={LoginPage} />
          <Route component={NoMatchPage} />
        </Switch>
        FooterComponent
      </Router>
    </React.Fragment>
  );
}

export default App;
