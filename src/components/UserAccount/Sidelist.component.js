import { emphasize, makeStyles } from "@material-ui/core/styles";
import { useIntl } from "react-intl";
import { myAccountMessage } from "../../translations";
import { useHistory } from "react-router";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "90%",
    margin: "20px",
  },
  tabs: {
    padding: "20px",
    backgroundColor: "inherit",
    color: "black",
    textAlign: "left",
    cursor: "pointer",
    "&:hover, &:focus": {
      backgroundColor: "#ddd",
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
  selected: {
    display: "block",
    backgroundColor: "#f1f1f1",
    padding: "20px",
    color: "black",
    textAlign: "left",
    cursor: "pointer",
  },
}));

const SideList = () => {
  const classes = useStyle();
  const intl = useIntl();
  const history = useHistory();
  const list = {
    "/user": myAccountMessage.myAccount,
    "/cart": myAccountMessage.myCart,
    "/wishlist": myAccountMessage.myWishlist,
    "/order": myAccountMessage.myOrder,
    "/address": myAccountMessage.myAddress,
    "/payments": myAccountMessage.myPayments,
    "/logout": myAccountMessage.logout,
  };
  const handleClick = (url) => {
    history.push(url);
  };

  return (
    <>
      <div className={classes.root}>
        {Object.keys(list).map((el, index) =>
          el === history.location.pathname ? (
            <div className={classes.selected}>
              {intl.formatMessage(list[el])}
            </div>
          ) : (
            <div
              className={classes.tabs}
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

export default SideList;
