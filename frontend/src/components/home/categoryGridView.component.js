import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import styled from "styled-components";
import { categoriesMessage } from "../../translations";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";

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
}));
const CategoriesHeader = styled.h1`
  text-align: center;
`;

const CategoriesGridView = () => {
  const intl = useIntl();
  const classes = useStyles();
  const data = useSelector((state) => state.category.categories);
  return (
    <>
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
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
};

export default CategoriesGridView;
