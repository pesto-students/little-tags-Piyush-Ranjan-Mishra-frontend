import React, { lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useIntl } from "react-intl";
import { actionMessage, myAccountMessage } from "../../translations";
import { useHistory } from "react-router";
import Chip from "@material-ui/core/Chip";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const BreadCrumbs = lazy(() => import("../Breadcrumb.component"));
const SingleCartlist = lazy(() =>
  import("../ListComponent/singlecards/SingleCartlist.component")
);
const SideList = lazy(() => import("./Sidelist.component"));

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  cartButton: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  pagination: {
    display: "flex",
    height: "50px",
    margin: "25px 20px",
    justifyContent: "center",
  },
}));

const CartListComponent = () => {
  const user = useSelector((state) => state.user.userDetail);
  const dispatch = useDispatch();
  const intl = useIntl();
  const history = useHistory();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyle();

  React.useEffect(() => {
    if (!user) {
      history.push("/login");
    }
    if (!user?.cart) dispatch({ type: "CART" });
    
  }, [dispatch, history, user, user?.cart]);

  const handlePageChange = (_, value) => {
    dispatch({ type: "CART", value });
  };
  const breadcrumb = {
    "/": "/",
    "/user": intl.formatMessage(myAccountMessage.myAccount),
    "/cart": intl.formatMessage(myAccountMessage.myCart),
  };
  const BuyNowButton = () => (
    <div className={classes.cartButton}>
      <Chip
        onClick={() => {
          history.push('/checkout/1');
        }}
        style={{
          color: "white",
          backgroundColor: "green",
          padding: "10px 20px",
          marginRight: "20px",
        }}
        icon={<ShoppingCartIcon style={{ color: "white" }} />}
        label={intl.formatMessage(actionMessage.buyNow)}
      />
    </div>
  );
  return (
    <>
      <BreadCrumbs urlList={breadcrumb} />
      <BuyNowButton />
      <Grid container spacing={3}>
        <Grid item xs={isDesktop ? 3 : 12}>
          <SideList />
        </Grid>
        <Grid item xs={isDesktop ? 9 : 12}>
          {user?.cart?.length > 0 ? (
            user?.cart.map((key, index) => (
              <SingleCartlist tabIndex={index} product={key} index={index} />
            ))
          ) : (
            <Skeleton animation="wave" variant="rect" height={350} />
          )}
          <BuyNowButton />
          <div className={classes.pagination}>
            {user?.cart ? (
              <Pagination
                count={10}
                page={user?.orderlist?.page ?? 1}
                onChange={handlePageChange}
              />
            ) : (
              <Skeleton animation="wave" variant="rect" height={50} />
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default CartListComponent;
