import React, { lazy, Suspense } from "react";

import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import translations from "./translations";
import { makeStyles } from "@material-ui/core/styles";

import { ThemeProvider } from "styled-components";
import { Skeleton } from "@material-ui/lab";
const NavBarComponent = lazy(() => import("./components/navbar.component"));
const FooterComponent = lazy(() => import("./components/footer.component"));
const LoginPage = lazy(() => import("./pages/signup/signup.page"));
const NoMatchPage = lazy(() => import("./pages/noMatch.page"));
const WishlistPage = lazy(() => import("./pages/Account/WishList.page"));
const OrderlistPage = lazy(() => import("./pages/Account/OrderList.page"));

const CartlistPage = lazy(() => import("./pages/Account/CartList.page"));

const ProductListPage = lazy(() =>
  import("./pages/productlist/productlist.page")
);
const ProductPage = lazy(() => import("./pages/product/product.page"));
const HomePageScreen = lazy(() => import("./pages/homepage/homepage.screen"));
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      margin: "auto",
    },
  },
}));
function App() {
  const classes = useStyles();

  const store = useSelector((state) => state);
  const renderLoader = () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Skeleton animation="wave" variant="rect" height={50} />
      <div
        style={{
          height: "400px",
        }}
      ></div>
      <Skeleton animation="wave" variant="rect" height={150} />
    </div>
  );

  return (
    <Suspense fallback={renderLoader()}>
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
                <Route path="/order" component={OrderlistPage} />
                <Route path="/cart" component={CartlistPage} />
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
    </Suspense>
  );
}

export default App;
