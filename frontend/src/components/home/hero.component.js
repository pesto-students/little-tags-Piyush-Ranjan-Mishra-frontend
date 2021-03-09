import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import image1 from "../../assets/hero/1.png";
import image2 from "../../assets/hero/2.png";
import image3 from "../../assets/hero/3.png";
import image4 from "../../assets/hero/4.png";
const useStyles = makeStyles((theme) => ({
  carousel: {
    height: "350px",
    [theme.breakpoints.up("sm")]: {
      height: "500px",
    },
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    height: "300px",
    [theme.breakpoints.up("sm")]: {
      height: "450px",
    },
    objectFit: "fill",
  },
}));
const HeroComponent = () => {
  const classes = useStyles();
  const images = [
    { image: image1, alt: "Sales" },
    { image: image2, alt: "Sales" },
    { image: image3, alt: "Sales" },
    { image: image4, alt: "Sales" },
  ];
  const onClickItem = (index) => {
    console.log("hero item clicked", index);
  };
  return (
    <Carousel
      className={classes.carousel}
      indicators={true}
      swipe={true}
      animation="slide"
      navButtonsAlwaysVisible={true}
      autoPlay={true}
      onClickItem={onClickItem}
    >
      {images.map((el) => (
        <div key={el.alt}>
          <img className={classes.image} src={el.image} alt={el.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default HeroComponent;
