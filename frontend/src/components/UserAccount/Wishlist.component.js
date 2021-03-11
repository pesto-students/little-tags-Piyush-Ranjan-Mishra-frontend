import React, { lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useIntl } from "react-intl";
import { myAccountMessage } from "../../translations";
import { useHistory } from "react-router";

const BreadCrumbs = lazy(() => import("../Breadcrumb.component"));
const Singlewishlist = lazy(() =>
  import("../ListComponent/SingleWishlist.component")
);
const SideList = lazy(() => import("./Sidelist.component"));

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  pagination: {
    display: 'flex',
    height: "50px",
    margin: "25px 20px",
    justifyContent: "center",
  },
}));

const WishListComponent = () => {
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
    if (!user?.wishlist) dispatch({ type: "WISHLIST" });
  }, [user, user?.wishlist]);
  const handleChange = (_, value) => {
    dispatch({ type: "WISHLIST", value });
  };
  const breadcrumb = {
    "/": "/",
    "/user": intl.formatMessage(myAccountMessage.myAccount),
    "/wishlist": intl.formatMessage(myAccountMessage.myWishlist),
  };
  return (
    <>
      <BreadCrumbs urlList={breadcrumb} />
      <Grid container spacing={3}>
        <Grid item xs={isDesktop ? 3 : 12}>
          <SideList />
        </Grid>
        <Grid item xs={isDesktop ? 9 : 12}>
          {user?.wishlist?.length > 0 ? (
            [1, 2, 3].map((key) => <Singlewishlist tabIndex={key} />)
          ) : (
            <Skeleton animation="wave" variant="rect" height={350} />
          )}
          <div className={classes.pagination}>
            {user?.wishlist ? (
              <Pagination
                count={10}
                page={user?.wishlist?.page ?? 1}
                onChange={handleChange}
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

export default WishListComponent;
