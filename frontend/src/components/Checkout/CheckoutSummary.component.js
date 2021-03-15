import { makeStyles } from "@material-ui/core/styles";
import { useIntl } from "react-intl";
import { checkoutMessage, shippingMessage } from "../../translations";
import { useSelector } from "react-redux";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: "10px 20px",
  },
  title: {
    fontSize: "xx-large",
    margin: "20px 0px",
    padding: "20px 0px",
    borderBottom: "2px solid grey",
  },
  showCart: {
    margin: "20px auto",
    borderBottom: "2px solid grey",
  },
  cartCard: {
    width: "100%",
    display: "flex",
  },
  cardImage: {
    width: "100px",
    [theme.breakpoints.down("md")]: {
      width: "none",
    },
  },
  cardDetail: {
    marginLeft: "10px",
    width: "200px",
    [theme.breakpoints.down("sm")]: {
      width: "none",
    },
  },
  overflow: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textSize: "small",
    textOverflow: "ellipsis",
  },
  summaryTable: {
    tableLayout: "auto",
    width: "100%",
    fontSize: "medium",
    borderCollapse: "collapse",
  },

  rowTable: {
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  totalTable: {
    fontSize: "x-large",
    margin: "20px 0px",
    padding: "20px 0px",
    borderTop: "2px solid grey",
    borderBottom: "2px solid grey",
  },
}));

const CheckoutSummary = ({ showCart = true, shipping = 0 }) => {
  const classes = useStyle();
  const intl = useIntl();
  const cart = useSelector((state) => state.user?.userDetail?.cart);
  const shippingCost =
    shipping > 0
      ? intl.formatNumber(shipping, {
          style: "currency",
          currency: "INR",
        })
      : intl.formatMessage(shippingMessage.free);
  console.log("Shipping", shipping, cart);
  let total = 0;
  const CartCard = (product, index) => {
    total += product?.quantity
      ? product?.quantity * product.price
      : product.price;
    return (
      <div className={classes.cartCard} key={index}>
        <img
          className={classes.cardImage}
          src={product.productUrl}
          alt={product.name}
        />
        <div className={classes.cardDetail}>
          <h6 className={classes.overflow}>{product.name}</h6>
          <p className={classes.overflow}>
            Elit ex sunt enim dolor consectetur qui. Velit laboris sint laboris
            ullamco. Do est incididunt occaecat tempor minim occaecat
            consectetur
          </p>
          <p>
            {intl.formatNumber(product.quantity * product.price, {
              style: "currency",
              currency: "INR",
            })}
          </p>
        </div>
      </div>
    );
  };
  const cartList = cart?.map(CartCard);
  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>
          {intl.formatMessage(checkoutMessage.summaryTitle)}
        </div>
        {showCart && cart && (
          <div className={classes.showCart}>{cartList}</div>
        )}
        <table className={classes.summaryTable}>
          <tbody>
            <tr className={classes.rowTable}>
              <td>{intl.formatMessage(checkoutMessage.subtotal)}</td>
              <td>
                {intl.formatNumber(total, {
                  style: "currency",
                  currency: "INR",
                })}
              </td>
            </tr>
            <tr className={classes.rowTable}>
              <td>{intl.formatMessage(checkoutMessage.shipping)}</td>
              <td>{shippingCost}</td>
            </tr>
            <tr className={classes.rowTable}>
              <td>{intl.formatMessage(checkoutMessage.taxes)}</td>
              <td>
                {intl.formatNumber(total * 0.2, {
                  style: "currency",
                  currency: "INR",
                })}
              </td>
            </tr>
            <tr className={classes.totalTable}>
              <td>{intl.formatMessage(checkoutMessage.total)}</td>
              <td>
                {intl.formatNumber(total * 1.2 +shipping, {
                  style: "currency",
                  currency: "INR",
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CheckoutSummary;
