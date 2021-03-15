import { makeStyles } from "@material-ui/core/styles";
import { useIntl } from "react-intl";
import { footerMessage } from "../translations";
import payments from "../assets/payment_options.png";
import TextField from "@material-ui/core/TextField";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
    backgroundColor: "#000202",
    flexGrow: 1,
    color: "#fff",
  },
  grow: {
    flexGrow: 1,
  },
  image: {
    height: "120px",
  },
  paymentOption: {
    width: "200px",
  },
  social: {
    width: "70%",
    margin: "10px",
    fontSize: "1.6em",
    display: "flex",
    justifyContent: "space-between",
  },
  socialIcon: {
    margin: "0 10px",
    color: "white",
  },
  email: {
    backgroundColor: "white",
    width: "70%",
    padding: "0 10px",
    borderRadius: "10px",
  },
}));
const FooterComponent = () => {
  const classes = useStyles();
  const intl = useIntl();
  const categoryList = useSelector((state) => state.category.list);
  console.log("category", categoryList);
  const socialMedia = {
    "https://twitter.com": <TwitterIcon />,
    "https://facebook.com": <FacebookIcon />,
    "https://youtube.com": <YouTubeIcon />,
    "https://instagram.com": <InstagramIcon />,
  };
  return (
    <>
      <div className={classes.root}>
        <Container>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={3}
          >
            <Grid item md={4} xs={6}>
              <div>
                <h3>{intl.formatMessage(footerMessage.contactUs)}</h3>
                <p>
                  {intl.formatMessage(footerMessage.phone, { phone: "29837" })}
                </p>
                <p>
                  {intl.formatMessage(footerMessage.address, {
                    address: "dlfkjdf",
                  })}
                </p>
                <p>{intl.formatMessage(footerMessage.paymentOption)}</p>
                <img
                  className={classes.paymentOption}
                  src={payments}
                  alt={intl.formatMessage(footerMessage.paymentOption)}
                />
              </div>
            </Grid>
            <Grid item md={4} xs={6}>
              <div>
                <h3>{intl.formatMessage(footerMessage.links)}</h3>
                {Object.keys(categoryList).map((key) => (
                  <a href={`/categories:${key}`} style={{ color: "white" }}>
                    {" "}
                    <p>{intl.formatMessage({ id: categoryList[key] })}</p>
                  </a>
                ))}
              </div>
            </Grid>
            <Grid item md={4} xs={12}>
              <div>
                <h3>{intl.formatMessage(footerMessage.subscribeTitle)}</h3>
                <form className={classes.email} noValidate autoComplete="off">
                  <TextField
                    className={classes.email}
                    type="email"
                    id="standard-basic"
                    placeholder={intl.formatMessage(
                      footerMessage.subscribeInput
                    )}
                  />
                </form>
                <div className={classes.social}>
                  {intl.formatMessage(footerMessage.socialMedia)}
                  <div className={classes.grow}></div>
                  {Object.keys(socialMedia).map((key) => (
                    <a className={classes.socialIcon} href={key} key>
                      {socialMedia[key]}
                    </a>
                  ))}
                </div>
              </div>
            </Grid>
          </Grid>
          <Container maxWidth="sm">
            <a href="/terms" style={{ color: "white" }}>
              {intl.formatMessage(footerMessage.tnc)}
            </a>
            {intl.formatMessage(footerMessage.credit)}
          </Container>
        </Container>
      </div>
    </>
  );
};

export default FooterComponent;
