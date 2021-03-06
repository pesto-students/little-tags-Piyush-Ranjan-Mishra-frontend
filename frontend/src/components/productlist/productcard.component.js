import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Card from "@material-ui/core/Card";
import Rating from "@material-ui/lab/Rating";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  scaleCard: {
    "&:hover": { transform: "scale(1.05)" },
  },
}));

const tileData = [
  {
    img:
      "https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Sneakers",
    author: "$300",
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
];
export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={400}
        cols={3}
        className={classes.gridList}
        style={{ width: "auto", height: "auto" }}
        spacing={50}
      >
        {tileData.map((tile) => (
          <GridListTile key={tile.img} style={{}} className={classes.scaleCard}>
            <img src={tile.img} alt={tile.title} xs={12} />
            <GridListTileBar
              style={{ top: 0, background: "#00000000" }}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <FavoriteBorderIcon fontSize="large" />
                </IconButton>
              }
            />
            <GridListTileBar
              title={tile.title}
              subtitle={
                <span>
                  {" "}
                  {tile.author} <Rating name="read-only" value={4} readOnly />
                </span>
              }
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <ShoppingCartIcon fontSize="large" />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
