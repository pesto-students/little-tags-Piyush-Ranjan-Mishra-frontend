import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "flex",
    justifyContent: "space-between",
    flex: "1",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function HeaderProducts() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.formControl}>
      <h2>Search Results</h2>
      <FormControl>
        <InputLabel htmlFor="age-native-simple">Sort</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: "age",
            id: "age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Sort By Price</option>
          <option value={20}>Sort By Popularity</option>
          <option value={30}>Sort By Ratings</option>
        </Select>
      </FormControl>
    </div>
  );
}
