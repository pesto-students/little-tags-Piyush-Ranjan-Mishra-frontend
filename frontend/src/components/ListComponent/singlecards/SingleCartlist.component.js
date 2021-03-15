import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useIntl } from "react-intl";
import { actionMessage } from "../../../translations";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

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
  center: {
    justifyContent: "space-between",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      display: "grid",
      gridAutoFlow: "column",
      gridColumnGap: "10px",
      alignItems: "center",
    },
  },
  finalPrice: {
    fontWeight: "700",
    fontSize: "xx-large",
  },
  price: {
    display: "inline",
    margin: "10px",
    justifyContent: "space-between",
  },
  discount: {
    color: "#c3d61a",
  },
  addButton: {
    backgroundColor: "green",
    color: "white",
  },
  removeButton: {
    backgroundColor: "green",
    color: "white",
  },
}));

const SingleCartlist = ({ product, index }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const intl = useIntl();

  product.quantity = product?.quantity ?? 1;
  const modifyCart = () => {
    dispatch({ type: "MODIFY_ADD_TO_CART", value: product, index });
  };
  const onQuantityAddChange = () => {
    product.quantity = product.quantity + 1;
    modifyCart();
  };

  const onQuantitySubtractChange = () => {
    product.quantity = product.quantity - 1;
    modifyCart();
  };
  const discount = product.retailPrice - product.price;
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
                <Typography gutterBottom variant="h6">
                  {product?.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  In aliquip minim sint velit non exercitation laborum esse
                  cillum anim aute. Consequat veniam eu adipisicing esse non est
                  reprehenderit nostrud aliquip eu exercitation. In ipsum qui
                </Typography>

                <Chip
                  onClick={() => {
                    dispatch({ type: "REMOVE_ADD_TO_CART", value: product });
                  }}
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    padding: "10px 20px",
                    marginRight: "20px",
                  }}
                  icon={<DeleteIcon style={{ color: "white" }} />}
                  label={intl.formatMessage(actionMessage.remove, {
                    item: "",
                  })}
                />
                <div className={classes.price}>
                  <ButtonGroup
                    size="small"
                    aria-label="small outlined button group"
                  >
                    <Button
                      className={classes.removeButton}
                      onClick={onQuantitySubtractChange}
                    >
                      -
                    </Button>
                    <p style={{ textAlign: "center" }}>
                      {product?.quantity ?? 1}
                    </p>
                    <Button
                      className={classes.addButton}
                      onClick={onQuantityAddChange}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.center}>
            <div className={classes.finalPrice}>
              {intl.formatNumber(product?.price * product.quantity, {
                style: "currency",
                currency: "INR",
              })}
            </div>
            {intl.formatNumber(product?.price, {
              style: "currency",
              currency: "INR",
            })}{" "}
            X {product.quantity}
            {discount > 0 && (
              <div className={classes.discount}>
                {intl.formatMessage(actionMessage.discount, {
                  price: intl.formatNumber(product?.quantity * discount, {
                    style: "currency",
                    currency: "INR",
                  }),
                })}
              </div>
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
  return card;
};

export default SingleCartlist;
