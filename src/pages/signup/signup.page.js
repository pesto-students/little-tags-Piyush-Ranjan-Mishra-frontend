import React from "react";

import loginPic from "../../assets/login.jpeg";
import loginSideImage from "../../assets/loginSideImage.png";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { useIntl } from "react-intl";
import { loginMessage } from "../../translations";
import { Container, Grid, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${loginPic})`,
    margin: "auto",
    padding: "3em 0px",
    width: "100%",
    display: "flex",
    flexFlow: "flex-end",
    height: "max-height",
  },
  body1: {
    textAlign: "center",
  },
  grow: {
    flexGrow: 1,
  },
  card: {
    width: 300,
  },
  cardDiv: {
    padding: "10px 30px",
  },
  social: {
    color: "#54514e",
    border: "1px solid",
    margin: "auto",
    borderRadius: "5px",
    textAlign: "center !important",
  },
  field: {
    width: "100%",
    "& .MuiTextField-root": {
      color: "#54514e",
      margin: theme.spacing(1),
    },
  },
  button: {
    padding: "10px",
    textAlign: "center",
    backgroundColor: "#54514e",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  terms: {
    borderTop: "1px solid",
    backgroundColor: "#F9FAFB",
    padding: "20px",
    color: "grey",
    fontSize: "12px",
  },
  loginLeft: {
    backgroundImage: `url(${loginSideImage})`,
    padding: "3em 0px",
    width: "100%",
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const intl = useIntl();
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const icons = [<FacebookIcon />, <TwitterIcon />, <FacebookIcon />];
  const field = {
    text: intl.formatMessage(loginMessage.fullName),
    tel: intl.formatMessage(loginMessage.mobile),
    password: intl.formatMessage(loginMessage.password),
  };
  const handleLogin = (_) => {
    dispatch({ type: "LOGIN" });
  };

  React.useEffect(() => {
    console.log("lohin", user?.name);
    if (user?.name) {
      history.goBack();
    }
  }, [history, user?.name]);
  return (
    <Grid container className={classes.root}>
      <Grid item xs={0} sm={2} />
      <Grid item xs={12} sm={4} className={classes.loginLeft}></Grid>
      <Grid item xs={12} sm={4}>
        {/* <div className={classes.root}>
          <div className={classes.grow}></div> */}
        <Container maxWidth="sm">
          <Card>
            <div className={classes.cardDiv}>
              <Typography varient="h2" align="center">
                {intl.formatMessage(loginMessage.signinMessage)}
              </Typography>

              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                spacing={1}
              >
                {icons.map((el) => (
                  <Grid item xs={12 / icons.length}>
                    <div class={classes.social} elevation={1}>
                      <Container maxWidth="sm" onClick={handleLogin}>
                        {el}
                      </Container>
                    </div>
                  </Grid>
                ))}

                <Typography varient="h2" align="center">
                  {intl.formatMessage(loginMessage.or)}
                </Typography>
                <form className={classes.field} noValidate autoComplete="off">
                  {Object.keys(field).map((key) => (
                    <Grid xs={12}>
                      <TextField
                        type={key}
                        name={key}
                        id="outlined-basic"
                        label={field[key]}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                  ))}
                </form>
                <Grid item xs={12}>
                  <div className={classes.button} onClick={handleLogin}>
                    {intl.formatMessage(loginMessage.register)}
                  </div>
                </Grid>
              </Grid>
              <Container></Container>
            </div>
            <Container>
              <div className={classes.hl}></div>
              <div className={classes.terms}>
                {intl.formatMessage(loginMessage.terms)}
              </div>
            </Container>
          </Card>
        </Container>
        {/* </div> */}
      </Grid>
      <Grid item xs={0} sm={2} />
    </Grid>
  );
};

export default LoginPage;
