import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    margin: "10px",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up("sm")]: {
      width: "30%",
    },
  },
  grow: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    width: "90%",
  },
  addNew: {
    display: "flexbox",
    height: "145px",
    alignItems: "center",
  },
}));

const SingleAddresslist = ({ address, onAddNew }) => {
  const classes = useStyles();

  const card = (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography gutterBottom variant="h6">
              {`${address?.firstName} ${address?.lastName}`}
            </Typography>
            {address?.mobile}
            <br></br>
            {address?.line1}
            <br></br>
            {address?.line2}
            <br></br>
            {`${address?.country} ${address?.zipCode}`}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
  const addNew = (
      <AddIcon
        onClick={onAddNew}
        fontSize="large"
        style={{ color: "white", backgroundColor: "green" }}
      />
  );
  return address ? card : addNew;
};

export default SingleAddresslist;
