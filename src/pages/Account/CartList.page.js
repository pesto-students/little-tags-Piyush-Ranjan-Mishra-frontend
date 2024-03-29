import React, { lazy } from "react";
import Helmet from "react-helmet";

const CartListComponent = lazy(() =>
  import("../../components/UserAccount/Cartlist.component")
);

const CartlistPage = () => {
  return (
    <>
      <Helmet title="My Cart" />
      <CartListComponent />
    </>
  );
};

export default CartlistPage;
