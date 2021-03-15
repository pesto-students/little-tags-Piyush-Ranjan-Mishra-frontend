import { makeStyles } from "@material-ui/core";
import React, { lazy, useState } from "react";
import Helmet from "react-helmet";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { actionMessage } from "../../translations";

const TopTabBar = lazy(() =>
  import("../../components/Checkout/TopTab.component")
);
const CheckoutSummary = lazy(() =>
  import("../../components/Checkout/CheckoutSummary.component")
);
const SingleCartlist = lazy(() =>
  import("../../components/ListComponent/singlecards/SingleCartlist.component")
);
const AddressComponent = lazy(() =>
  import("../../components/Checkout/Address.component")
);

const PaymentComponent = lazy(() =>
  import("../../components/Checkout/Payments.component")
);

const useStyle = makeStyles((theme) => ({
  root: {
    display: "inline",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  leftSide: {
    width: "100",
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    },
  },
  rightSide: {
    display: "block",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30%",
    },
  },
  action: {
    display: "flex",
    flexDirection: "row",
    textSize: "large",
    textAlign: "center",
    color: "white",
  },
  cancelButton: {
    margin: "5px",
    padding: "20px",
    color: "black",
    backgroundColor: "#ddd",
    flexGrow: 1,
    cursor: "pointer",
  },
  actionButton: {
    margin: "5px",
    padding: "20px",
    backgroundColor: "#049121",
    cursor: "pointer",
    flexGrow: 1,
  },
}));

const CheckoutPage = () => {
  const userDetail = useSelector((state) => state.user?.userDetail);
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const intl = useIntl();
  const [fastDelivery, setFastDelivery] = useState(false);

  const findPage = () => {
    const list = history.location.pathname.split("/");
    return Number(list[list.length - 1]);
  };
  const page = findPage();

  const cartList = userDetail?.cart?.map((product, index) => {
    return <SingleCartlist tabIndex={0} product={product} index={index} />;
  });

  if (page === 2 && !userDetail?.addresses) {
    dispatch({ type: "ADDRESSES" });
  } else if (page === 3 && !userDetail?.payments) {
    dispatch({ type: "Payment_CARD" });
  }

  return (
    <>
      <Helmet title="Checkout" />
      <TopTabBar />
      <div className={classes.root}>
        <div className={classes.leftSide}>
          {page === 1 ? (
            cartList
          ) : page === 2 ? (
            <AddressComponent onNextDayDelivey={setFastDelivery} />
          ) : (
            <PaymentComponent />
          )}
        </div>
        <div className={classes.rightSide}>
          <CheckoutSummary
            showCart={page != 1}
            shipping={fastDelivery ? 20 : 0}
          />
          <div className={classes.action}>
            <div
              className={classes.cancelButton}
              onClick={() => {
                history.push("/");
              }}
            >
              {intl.formatMessage(actionMessage.cancel)}
            </div>
            <div
              className={classes.actionButton}
              onClick={() => {
                if (page < 3) {
                  history.push(`/checkout/${page + 1}`);
                } else {
                  history.push("/");
                }
              }}
            >
              {intl.formatMessage(
                page === 3 ? actionMessage.pay : actionMessage.next
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
