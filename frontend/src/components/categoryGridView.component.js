import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import styled from "styled-components";
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
    borderRadius: "5px",
    height: "300px !important",
  },
}));
const CategoriesHeader = styled.h1`
  text-align: center;
`;
const tileData = [
  {
    img:
      "https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Breakfast",
    author: "jill111",
    cols: 2,
    featured: true,
  },
  {
    img:
      "https://images.unsplash.com/photo-1516442719524-a603408c90cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
    title: "Tasty burger",
    author: "director90",
  },
  {
    img:
      "https://images.unsplash.com/photo-1502323936172-532616ad0c5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Camera",
    author: "Danson67",
  },
  {
    img:
      "https://images.unsplash.com/photo-1602573991155-21f0143bb45c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=657&q=80",
    title: "Morning",
    author: "fancycrave1",
    featured: true,
  },
  {
    img:
      "https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    title: "Hats",
    author: "Hans",
  },
  {
    img:
      "https://images.unsplash.com/photo-1563826693565-15b453e9554a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Honey",
    author: "fancycravel",
  },
  {
    img:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80",
    title: "Vegetables",
    author: "jill111",
    cols: 2,
  },
  {
    img:
      "https://images.unsplash.com/photo-1432110847799-39dfbae1299f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    title: "Water plant",
    author: "BkrmadtyaKarki",
  },
  {
    img:
      "https://images.unsplash.com/photo-1432110847799-39dfbae1299f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    title: "Mushrooms",
    author: "PublicDomainPictures",
  },
  {
    img:
      "https://images.unsplash.com/photo-1432110847799-39dfbae1299f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    title: "Olive oil",
    author: "congerdesign",
  },
];
const CategoriesGridView = () => {
  const classes = useStyles();
  return (
    <>
      <CategoriesHeader>Categories</CategoriesHeader>
      <div className={classes.root}>
        <GridList cellHeight={200} className={classes.gridList} cols={3}>
          {tileData.map((tile) => (
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
