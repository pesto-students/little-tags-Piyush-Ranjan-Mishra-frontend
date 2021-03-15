import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import styled from "styled-components";
import { categoriesMessage } from "../../translations";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    marginTop: 0,
    width: "60vw",
  },
  gridListTile: {
    borderRadius: "5px !important",
    height: "300px !important",
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    opacity: "0",
    width: "100%",
    height: "100%",
    background: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "2rem",
    transition: ".5s ease",
    "&:hover": {
      opacity: "0.7",
    },
  },
}));
const CategoriesHeader = styled.h1`
  text-align: center;
`;

const CategoriesGridView = () => {
  const intl = useIntl();
  const classes = useStyles();
  const data = useSelector((state) => state.category.categories);
  return (
    <Box py={6}>
      <CategoriesHeader>
        {intl.formatMessage(categoriesMessage.header)}
      </CategoriesHeader>
      <div className={classes.root}>
        <GridList cellHeight={200} className={classes.gridList} cols={3}>
          {data.map((tile) => (
            <GridListTile
              className={classes.gridListTile}
              key={tile.img}
              cols={tile.cols || 1}
            >
              <a href="javascript:void(0)">
                <img src={tile.img} alt={tile.title} />
                <div className={classes.overlay}>
                  <div className={classes.titleName}>{tile.title}</div>
                </div>
              </a>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Box>
  );
};

export default CategoriesGridView;
