import React from "react";

import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageScreen from "./pages/homepage/homepage.screen";
import NavBarComponent from "./components/navbar.component";
import FooterComponent from "./components/footer.component";
import LoginPage from "./pages/signup/signup.page";
import NoMatchPage from "./pages/noMatch.page";
import WishlistPage from "./pages/wishlist/wishlist.page";
import { IntlProvider } from "react-intl";
import translations from "./translations";
import { ThemeProvider } from "styled-components";
import CategoriesGridView from "./components/categoryGridView.component";
function App() {
  const store = useSelector((state) => state);

  return (
    <ThemeProvider theme={store.theme}>
      <IntlProvider
        locale={store.lang.locale}
        messages={translations[store.lang.locale]}
      >
        <React.Fragment>
          <Router>
            <NavBarComponent />
            <Switch>
              <Route exact path="/" component={HomePageScreen} />
              <Route path="/login" component={LoginPage} />
              <Route path="/wishlist" component={WishlistPage} />
              <Route component={NoMatchPage} />
            </Switch>
            <CategoriesGridView />
            <FooterComponent />
          </Router>
        </React.Fragment>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
