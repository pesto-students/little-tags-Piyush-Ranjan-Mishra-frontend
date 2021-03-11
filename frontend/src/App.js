import React, { lazy, Suspense } from "react";

import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import translations from "./translations";
import { makeStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";
import { ThemeProvider } from "styled-components";
const NavBarComponent = lazy(() => import("./components/navbar.component"));
const FooterComponent = lazy(() => import("./components/footer.component"));
const LoginPage = lazy(() => import("./pages/signup/signup.page"));
const NoMatchPage = lazy(() => import("./pages/noMatch.page"));
const WishlistPage = lazy(() => import("./pages/wishlist/wishlist.page"));
const ProductListPage = lazy(() =>
  import("./pages/productlist/productlist.page")
);
const ProductPage = lazy(() => import("./pages/product/product.page"));
const HomePageScreen = lazy(() => import("./pages/homepage/homepage.screen"));
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > * + *": {
      margin: "auto",
    },
  },
}));
function App() {
  const classes = useStyles();

  const store = useSelector((state) => state);
  const renderLoader = () => (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );

  return (
    <ThemeProvider theme={store.theme}>
      <IntlProvider
        locale={store.lang.locale}
        messages={translations[store.lang.locale]}
      >
        <Suspense fallback={renderLoader()}>
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
        </Suspense>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
