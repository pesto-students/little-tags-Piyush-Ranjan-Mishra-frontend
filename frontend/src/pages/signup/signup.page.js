import loginPic from "../../assets/login.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { useIntl } from "react-intl";
import { loginMessage } from "../../translations";
import { Container, Grid, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import TextField from "@material-ui/core/TextField";
import { SButton } from "../../components/styled/styled";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${loginPic})`,
    margin: "auto",
    padding: "3em 0px",
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
    color: "#C98740",
    border: "1px solid",
    margin: "auto",
    borderRadius: "5px",
  },
  field: {
    "& .MuiTextField-root": {
      color: "#C98740",
      margin: theme.spacing(1),
    },
  },
  button: {
    padding: "10px",
    textAlign: "center",
    backgroundColor: "#C98740",
    color: "white",
    borderRadius: "5px",
  },
  terms: {
    borderTop: "1px solid",
    backgroundColor: "#F9FAFB",
    padding: "20px",
    color: "grey",
    fontSize: "12px",
  },
}));
const LoginPage = () => {
  const classes = useStyles();
  const intl = useIntl();
  const icons = [<FacebookIcon />, <TwitterIcon />, <FacebookIcon />];
  const field = {
    text: intl.formatMessage(loginMessage.fullName),
    tel: intl.formatMessage(loginMessage.mobile),
    password: intl.formatMessage(loginMessage.password),
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.grow}></div>
        <Container maxWidth="sm">
          <Card>
            <div className={classes.cardDiv}>
              <Typography>
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
                      <Container maxWidth="sm">{el}</Container>
                    </div>
                  </Grid>
                ))}
                <Grid xs={12}>{intl.formatMessage(loginMessage.or)}</Grid>
                <form className={classes.field} noValidate autoComplete="off">
                  {Object.keys(field).map((key) => (
                    <Grid xs={12}>
                      <TextField
                        type={key}
                        name={key}
                        id="outlined-basic"
                        label={field[key]}
                        variant="outlined"
                      />
                    </Grid>
                  ))}
                </form>
                <Grid item xs={12}>
                  <div className={classes.button}>
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
      </div>
    </>
  );
};

export default LoginPage;
