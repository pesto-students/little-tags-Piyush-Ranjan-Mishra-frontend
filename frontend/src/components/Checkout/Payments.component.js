import { makeStyles } from "@material-ui/core";
import { lazy, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { checkoutMessage, paymentMessage } from "../../translations";
import { paymentImage } from "../../data";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";

const SinglePaymentlist = lazy(() =>
  import("../ListComponent/singlecards/SinglePaymentList.component")
);

const useStyle = makeStyles((theme) => ({
  root: {
    display: "block",
  },
  title: {
    color: "grey",
    fontSize: "xx-large",
    margin: "20px 0px",
    padding: "20px 0px",
    borderBottom: "2px solid grey",
  },
  flex: {
    display: "block",
    justifyItems: "space-between",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  addNewPayment: {
    display: "block-inline",
    backgroundColor: "grey",
    margin: "10px",
    padding: "20px",
    color: "white",
    textAlign: "center",
    justifyitems: "center",
    cursor: 'pointer',
  },
  flex50: {
    display: "inline",
    width: "100%",
    margin: "10px 20px",
  },
  form: {
    display: "block",
  },
  image: {
    width: "40px",
  },
}));

const PaymentComponent = () => {
  const payments = useSelector((state) => state.user?.userDetail.payments);
  const classes = useStyle();
  const intl = useIntl();
  const [newPayment, setNewPayment] = useState(false);
  const dispatch = useDispatch();

  const newPaymentObject = {
    name: `${Math.random() > 0.5 ? "visa" : "master"}`,
  };
  const myChangeHandler = (event) => {
    const key = event.target.id;
    const val = event.target.value;
    newPaymentObject[key] = val;
  };
  const mySubmitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_Payment_CARD", value: newPaymentObject });
    setNewPayment(!newPayment);
  };

  const NewPayment = () => (
    <form
      className={classes.email}
      noValidate
      autoComplete="off"
      onSubmit={mySubmitHandler}
    >
      <div className={classes.flex}>
        <TextField
          className={classes.flex50}
          type="number"
          id="cardNumber"
          variant="filled"
          onChange={myChangeHandler}
          label={intl.formatMessage(paymentMessage.cardNumber)}
          InputProps={{
            endAdornment: (
              <img
                className={classes.image}
                src={paymentImage[newPaymentObject.name]}
                alt={intl.formatMessage(paymentMessage.cardNumber)}
              />
            ),
          }}
        />
      </div>
      <div className={classes.flex}>
        <TextField
          className={classes.flex50}
          type="text"
          id="expiry"
          variant="filled"
          onChange={myChangeHandler}
          label={intl.formatMessage(paymentMessage.expiry)}
        />
        <TextField
          className={classes.flex50}
          type="number"
          id="cvv"
          variant="filled"
          onChange={myChangeHandler}
          label={intl.formatMessage(paymentMessage.cvv)}
        />
      </div>
      <input type="submit" value={intl.formatMessage(paymentMessage.submit)} />
    </form>
  );

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        {intl.formatMessage(checkoutMessage.paymentDetail)}
      </div>
      <div className={classes.flex}>
        {newPayment ? (
          <NewPayment />
        ) : payments ? (
          payments.map((payment, index) => (
            <SinglePaymentlist key={index} payment={payment} />
          ))
        ) : (
          <></>
        )}
      </div>
      {!newPayment && (
        <div
          className={classes.addNewPayment}
          onClick={() => {
            setNewPayment(!newPayment);
          }}
        >
          <AddIcon fontSize="large" style={{ color: "white" }} />
          {intl.formatMessage(paymentMessage.submit)}
        </div>
      )}
    </div>
  );
};

export default PaymentComponent;
