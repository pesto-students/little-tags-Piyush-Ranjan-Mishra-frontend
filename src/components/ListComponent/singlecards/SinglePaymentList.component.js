import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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

const SinglePaymentlist = ({ payment, onAddNew }) => {
  const classes = useStyles();
  const backgroundImage = {
    master: "https://i.dlpng.com/static/png/6953130_preview.png",
    visa:
      "https://e7.pngegg.com/pngimages/37/513/png-clipart-logo-visa-credit-card-debit-card-visa-text-trademark-thumbnail.png",
  };
 
  return  (
    <div className={classes.root}>
      <Paper
        className={classes.paper}
        style={{ backgroundImage: `url[${backgroundImage[payment?.name]}]` }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <Typography gutterBottom variant="h6">
              {`XXXX XXXX XXXX ${payment.cardNumber}`}
            </Typography>
            {`${payment?.expiry}`}
          </Grid>
        </Grid>
      </Paper>
    </div>
     
  );
};

export default SinglePaymentlist;
