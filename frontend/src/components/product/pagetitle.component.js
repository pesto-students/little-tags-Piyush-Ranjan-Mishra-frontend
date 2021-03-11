import React from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import Container from "@material-ui/core/Container";
import ProducPageImage from "../../assets/productPage.jpg";

const useStyles = makeStyles({
  pageTitleBar: {
    padding: "5rem 0",
    h1: {
      fontSize: "3rem",
    },
    backgroundImage: `url(${ProducPageImage})`,
    backgroundPosition: "50%",
    color: "white",
  },
  textCenter: {
    p: {
      display: "inline-flex",
      flexDirection: "row-reverse",
    },
    textAlign: "center",
  },
  lead: {},
  textCapitalize: {},
  mb0: {},
});

function PageTitle(props) {
  const classes = useStyles();

  return (
    <div className={classNames(classes.pageTitleBar, classes.textCenter)}>
      <Container>
        <h1 className="mb-30"> {props.title}</h1>
        <p
          className={classNames(
            classes.lead,
            classes.textCapitalize,
            classes.mb0
          )}
        >
          {" "}
          {props.desc}{" "}
        </p>
      </Container>
    </div>
  );
}

export default PageTitle;
