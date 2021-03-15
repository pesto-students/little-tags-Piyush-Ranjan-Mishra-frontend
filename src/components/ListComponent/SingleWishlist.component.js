import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useIntl } from "react-intl";
import { actionMessage } from "../../translations";
import { useDispatch } from "react-redux";
import Chip from "@material-ui/core/Chip";
import DeleteIcon from "@material-ui/icons/Delete";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "10px",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  grow: { flexGrow: 1 },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    width: "90%",
  },
  image: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100px",
    },
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  },
  price: {
    flexDirection: "vertical",
    alignItems: "space-between",
    margin: "10px",
    justifyContent: "space-between",
  },
  retailPrice: {
    textDecoration: "line-through",
  },
}));

const SingleWishlist = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const intl = useIntl();
  const card = (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={product?.productUrl}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {product?.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <div className={classes.rating}>
                  <Rating
                    name="read-only"
                    value={product.ratingAvg}
                    precision={0.1}
                    readOnly
                    size="large"
                  ></Rating>{" "}
                  <div>{product.ratingAvg}</div>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.rating}>
                  <Chip
                    onClick={() => {
                      dispatch({ type: "REMOVE_WISHLIST", value: product });
                    }}
                    style={{
                      color: "white",
                      backgroundColor: "red",
                      marginRight: "20px",
                    }}
                    icon={<DeleteIcon style={{ color: "white" }} />}
                    label={intl.formatMessage(actionMessage.remove, {
                      item: "",
                    })}
                  />
                  <Chip
                    onClick={() => {
                      dispatch({ type: "ADD_TO_CART", value: product });
                    }}
                    style={{
                      color: "white",
                      backgroundColor: "green",
                      marginRight: "20px",
                    }}
                    icon={<ShoppingCartIcon style={{ color: "white" }} />}
                    label={intl.formatMessage(actionMessage.addToCart)}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid item md={1}>
              <div className={classes.price}>
                <div>
                  <Typography variant="subtitle1">
                    {intl.formatNumber(product?.price, {
                      style: "currency",
                      currency: "INR",
                    })}
                  </Typography>
                  <Typography
                    className={classes.retailPrice}
                    variant="subtitle2"
                    color="error"
                  >
                    {intl.formatNumber(product?.retailPrice, {
                      style: "currency",
                      currency: "INR",
                    })}
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
  return card;
  // return (
  //   { product?.name ? (card): (<Skeleton animation="wave" variant="rect" height={250} />)}
  // );
};

export default SingleWishlist;
