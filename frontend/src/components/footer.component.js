import { fade, makeStyles } from "@material-ui/core/styles";
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
    fontSize: "1.6em",
    display: "inline",
  },
  orderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
}));

const FooterComponent = () => {
  const classes = useStyles();
  const intl = useIntl();
  const categoryList = useSelector((state) => state.category.list);
  console.log("category", categoryList);
  return (
    <>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={3}>
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
          <Grid item xs={2}>
            <div>
              <h3>{intl.formatMessage(footerMessage.links)}</h3>
              {Object.keys(categoryList).map((key) => (
                <a href={`/categories:${key}`}>
                  {" "}
                  <p>{intl.formatMessage({ id: categoryList[key] })}</p>
                </a>
              ))}
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>
              <h3>{intl.formatMessage(footerMessage.subscribeTitle)}</h3>
          
              <div className={classes.search}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  type="email"
                  id="standard-basic"
                  label={intl.formatMessage(footerMessage.subscribeInput)}
                />
              </form>
              </div>
              <div className={classes.social}>
                {intl.formatMessage(footerMessage.socialMedia)}

                <FacebookIcon />
                <TwitterIcon />
                <YouTubeIcon />
                <InstagramIcon />
              </div>
            </div>
          </Grid>
        </Grid>
        <Container maxWidth="sm">
          <a href="/terms">{intl.formatMessage(footerMessage.tnc)}</a>
          {intl.formatMessage(footerMessage.credit)}
        </Container>
      </div>
    </>
  );
};

export default FooterComponent;
