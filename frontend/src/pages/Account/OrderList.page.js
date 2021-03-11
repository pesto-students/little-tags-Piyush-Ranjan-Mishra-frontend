import React, { lazy } from "react";
import Helmet from "react-helmet";

const OrderListComponent = lazy(() =>
  import("../../components/UserAccount/Orderlist.component")
);

const OrderlistPage = () => {
  return (
    <>
      <Helmet title="My Orders" />
      <OrderListComponent />
    </>
  );
};

export default OrderlistPage;
