import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  primaryColor: "black",
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    color: "black",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "250px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "600px",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    marginLeft: "20px",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: "30px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    retainPrice: {
      textDecoration: "line-through",
    },
  },
}));

const SearchText = ({ placeholder, inputProps }) => {
  const searchItem = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  console.log("items", searchItem);
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <Autocomplete
        id="search-products"
        freeSolo
        loading={!searchItem.allProduct}
        options={searchItem.allProducts}
        onChange={(_, newValue) => {
          history.push(`/category/${newValue.Category}/${newValue.ProductID}`);
        }}
        getOptionLabel={(option) => option.name}
        renderOption={(option) => (
          <React.Fragment>
            <Grid item xs={4}>
              <img src={option.url} alt={option.name} />
            </Grid>
            <Grid item md={6} xs={6}>
              <Typography
                className={classes.title}
                variant="h6"
                noWrap
                href="/"
              >
                {option.name}
              </Typography>
              <p>
                <div className={classes.retailPrice}>
                  <strong>{option.price}</strong>
                  {"\t"} {option.retailPrice}
                  <Rating name="read-only" value={option.ratingAvg} readOnly />
                </div>
              </p>
            </Grid>
            <Grid item md={2} xs={2}>
              <ShoppingCartIcon />
            </Grid>
          </React.Fragment>
        )}
        renderInput={(params) => (
          <div className={classes.inputInput}>
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {!searchItem.allProducts ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
              label={placeholder}
              margin="normal"
              variant="outlined"
            />
          </div>
        )}
      />
    </div>
  );
};

export default SearchText;
