import { emphasize, makeStyles } from "@material-ui/core/styles";
import { useIntl } from "react-intl";
import { checkoutMessage, myAccountMessage } from "../../translations";
import { useHistory } from "react-router";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: "100px",
    backgroundColor: "#333",
    fontSize: "x-large",
    [theme.breakpoints.down("md")]: {
      fontSize: "large",
    },
  },
  tabs: {
    padding: "20px",
    color: "grey",
    textAlign: "center",
    cursor: "pointer",
    "&:hover, &:focus": {
      backgroundColor: "#ddd",
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
    borderRight: "1px solid grey",
    curson: "pointer",
  },
  selected: {
    flexGrow: 2.5,
    padding: "20px",
    color: "white",
    textAlign: "center",
    borderRight: "1px solid grey",
    borderBottom: "5px solid white",
  },
}));

const TopTabBar = () => {
  const classes = useStyle();
  const intl = useIntl();
  const history = useHistory();
  const list = {
    "/checkout/1": checkoutMessage.cartDetail,
    "/checkout/2": checkoutMessage.shippingDetail,
    "/checkout/3": checkoutMessage.paymentDetail,
  };
  const handleClick = (url) => {
    history.push(url);
  };

  return (
    <>
      <div className={classes.root}>
        {Object.keys(list).map((el, index) =>
          el === history.location.pathname ? (
            <div className={classes.selected} key={index}>
              {intl.formatMessage(list[el])}
            </div>
          ) : (
            <div
              className={classes.tabs}
              key={index}
              onClick={() => handleClick(el)}
              href={el}
            >
              {intl.formatMessage(list[el])}
            </div>
          )
        )}
      </div>
    </>
  );
};

export default TopTabBar;
