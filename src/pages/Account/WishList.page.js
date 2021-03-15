import React, { lazy } from "react";
import Helmet from "react-helmet";

const WishListComponent = lazy(() =>
  import("../../components/UserAccount/Wishlist.component")
);

const WishlistPage = () => {
  return (
    <>
      <Helmet title="My Wishlist" />
      <WishListComponent />
    </>
  );
};

export default WishlistPage;
