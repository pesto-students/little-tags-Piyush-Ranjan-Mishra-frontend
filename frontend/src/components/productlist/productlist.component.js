import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/";
import Container from "@material-ui/core/Container";
import FilterCard from "./filtercard.component";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import { spacing } from "@material-ui/system";
import TypoGraphy from "@material-ui/core/Typography";
import ProductCard from "./productcard.component";
import Pagination from "@material-ui/lab/Pagination";
import PriceFilter from "./pricefilter.component";
import { useIntl } from "react-intl";
import { productsMessage } from "../../translations";
const useStyles = makeStyles({
  internalContainer: {
    border: "2px solid red",
    height: "300px",
    width: "300px",
  },
  externalContainer: {
    border: "2px solid red",
    height: "100vh",
    width: "100%",
  },
});

function ProductList() {
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
  const classes = useStyles();
  const intl = useIntl();
  return (
    <div style={{ padding: "5rem 0", margin: "0 2rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <FilterCard>
            <FormGroup style={{ padding: "1.5rem" }}>
              <TypoGraphy
                component="p"
                style={{ fontSize: "1.3rem", textTransform: "capitalize" }}
              >
                {intl.formatMessage(productsMessage.brand)}
              </TypoGraphy>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gilad}
                    onChange={handleChange}
                    name="gilad"
                  />
                }
                label="Samsung"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={jason}
                    onChange={handleChange}
                    name="jason"
                  />
                }
                label="Videocon"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={antoine}
                    onChange={handleChange}
                    name="antoine"
                  />
                }
                label="Sony Bravia"
              />
            </FormGroup>
          </FilterCard>
          <FilterCard>
            <PriceFilter />
          </FilterCard>
          <FilterCard>
            <FormGroup style={{ padding: "1.5rem" }}>
              <TypoGraphy
                component="p"
                style={{ fontSize: "1.3rem", textTransform: "capitalize" }}
              >
                Brand
              </TypoGraphy>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gilad}
                    onChange={handleChange}
                    name="gilad"
                  />
                }
                label="Samsung"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={jason}
                    onChange={handleChange}
                    name="jason"
                  />
                }
                label="Videocon"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={antoine}
                    onChange={handleChange}
                    name="antoine"
                  />
                }
                label="Sony Bravia"
              />
            </FormGroup>
          </FilterCard>
        </Grid>
        <Grid item xs={12} sm={9} container spacing={3}>
          <ProductCard />

          <Pagination
            count={10}
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              margin: "5rem 0",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductList;
