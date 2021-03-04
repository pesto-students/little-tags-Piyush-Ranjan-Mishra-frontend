import React from "react";

import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePageScreen from "./pages/homepage/homepage.screen";
import NavBarComponent from "./components/navbar.component";
import FooterComponent from "./components/footer.component";
import LoginPage from "./pages/signup/signup.page";
import NoMatchPage from "./pages/noMatch.page";
import WishlistPage from "./pages/wishlist/wishlist.page";
import ProductListPage from "./pages/productlist/productlist.page";
import ProductPage from "./pages/product/product.page";
import { IntlProvider } from "react-intl";
import translations from "./translations";
import { ThemeProvider } from "styled-components";
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
              <Route
                path="/products/:productType"
                component={ProductListPage}
              />
              <Route
                path="/products/:productType"
                component={ProductListPage}
              />
              <Route
                path="/product/:productType/:id"
                exact
                component={ProductPage}
              />
              <Route component={NoMatchPage} />
            </Switch>
            <FooterComponent />
          </Router>
        </React.Fragment>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
