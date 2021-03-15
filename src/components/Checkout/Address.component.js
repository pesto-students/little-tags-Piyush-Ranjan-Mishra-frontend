import { makeStyles } from "@material-ui/core";
import { lazy, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { checkoutMessage, shippingMessage } from "../../translations";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";

const SingleAddresslist = lazy(() =>
  import(
    "../../components/ListComponent/singlecards/SingleAddresslist.component"
  )
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
  flex50: {
    display: "inline",
    width: "100%",
    margin: "10px 20px",
  },
  form: {
    display: "block",
  },
  bottomTopBorder: {
    padding: "20px 0px",
    margin: "20px 0px",
    borderTop: "2px solid grey",
    borderBottom: "2px solid grey",
    color: "black",
    textAlign: "center",
  },
  deliveryOption: {
    width: "40%",
    margin: "20px",
    padding: "20px",
    backgroundColor: "grey",
  },
  addressList: {
    width: "100%",
  },
  addNewAddress: {
    display: "block-inline",
    backgroundColor: "grey",
    margin: "10px",
    padding: "20px",
    color: "white",
    textAlign: "center",
    justifyitems: "center",
    cursor: "pointer",
  },
}));

const AddressComponent = ({ onNextDayDelivey }) => {
  const addresses = useSelector((state) => state.user?.userDetail.addresses);
  const classes = useStyle();
  const [fastDelivery, setFastDelivery] = useState(false);
  const [newAddress, setNewAddress] = useState(false);
  const intl = useIntl();
  const dispatch = useDispatch();

  const newPaymentObject = {};
  const myChangeHandler = (event) => {
    const key = event.target.id;
    const val = event.target.value;
    newPaymentObject[key] = val;
  };
  const mySubmitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_ADDRESSES", value: newPaymentObject });
    setNewAddress(!newAddress);
  };

  const NewAddress = () => (
    <form
      className={classes.email}
      noValidate
      autoComplete="off"
      onSubmit={mySubmitHandler}
    >
      <div className={classes.flex}>
        <TextField
          className={classes.flex50}
          type="text"
          id="firstName"
          variant="filled"
          value="Jone"
          onChange={myChangeHandler}
          label={intl.formatMessage(shippingMessage.firstName)}
        />
        <TextField
          className={classes.flex50}
          type="text"
          id="lastName"
          variant="filled"
          value="Pot"
          onChange={myChangeHandler}
          label={intl.formatMessage(shippingMessage.lastName)}
        />
      </div>
      <div className={classes.flex}>
        <TextField
          className={classes.flex50}
          type="text"
          id="line1"
          variant="filled"
          value="I am here"
          onChange={myChangeHandler}
          label={intl.formatMessage(shippingMessage.address)}
        />
        <TextField
          className={classes.flex50}
          type="text"
          id="line2"
          variant="filled"
          value="Near this Address"
          onChange={myChangeHandler}
          label={intl.formatMessage(shippingMessage.address2)}
        />
      </div>
      <div className={classes.flex}>
        <TextField
          className={classes.flex50}
          type="text"
          id="country"
          variant="filled"
          value="India"
          onChange={myChangeHandler}
          label={intl.formatMessage(shippingMessage.country)}
        />
        <TextField
          className={classes.flex50}
          type="text"
          id="city"
          variant="filled"
          value="Varanasi"
          onChange={myChangeHandler}
          label={intl.formatMessage(shippingMessage.city)}
        />
      </div>
      <div className={classes.flex}>
        <TextField
          className={classes.flex50}
          type="number"
          id="zipCode"
          variant="filled"
          value="221001"
          onChange={myChangeHandler}
          label={intl.formatMessage(shippingMessage.zipcode)}
        />
        <TextField
          className={classes.flex50}
          type="phone"
          id="mobile"
          variant="filled"
          value="9988999"
          onChange={myChangeHandler}
          label={intl.formatMessage(shippingMessage.mobile)}
        />
      </div>
      <input type="submit" value={intl.formatMessage(shippingMessage.submit)} />
    </form>
  );

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        {intl.formatMessage(checkoutMessage.shippingDetail)}
      </div>
      <div className={classes.flex}>
        {newAddress ? (
          <NewAddress />
        ) : addresses ? (
          addresses.map((address, index) => (
            <SingleAddresslist
              key={index}
              address={address}
              onAddNew={() => {
                setNewAddress(!newAddress);
              }}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      {!newAddress && (
        <div
          className={classes.addNewAddress}
          onClick={() => {
            setNewAddress(!newAddress);
          }}
        >
          <AddIcon fontSize="large" style={{ color: "white" }} />
          {intl.formatMessage(shippingMessage.submit)}
        </div>
      )}
      <div className={classes.bottomTopBorder}>
        <>
          <label htmlFor="fastDelivey">
            {fastDelivery ? (
              <input
                onChange={(checked) => {
                  setFastDelivery(checked);
                  onNextDayDelivey(checked);
                }}
                type="checkbox"
                id="fastDelivery"
                checked="checked"
              />
            ) : (
              <input
                onChange={(checked) => {
                  setFastDelivery(checked);
                  onNextDayDelivey(checked);
                }}
                type="checkbox"
                id="fastDelivery"
              />
            )}

            {intl.formatMessage(shippingMessage.nextDayShipping, {
              price: intl.formatNumber(20),
            })}
          </label>
        </>
      </div>
    </div>
  );
};

export default AddressComponent;
