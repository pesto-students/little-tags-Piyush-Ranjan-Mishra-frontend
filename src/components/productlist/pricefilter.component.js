import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { useIntl } from "react-intl";
import { productsMessage } from "../../translations";
const useStyles = makeStyles({
  root: {
    width: 300,
    padding: "20px",
  },
  slider: {},
});

function valuetext(value) {
  return `${value}°C`;
}

export default function PriceFilter() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const intl = useIntl();
  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        {intl.formatMessage(productsMessage.priceRange)}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        className={classes.slider}
      />
    </div>
  );
}
