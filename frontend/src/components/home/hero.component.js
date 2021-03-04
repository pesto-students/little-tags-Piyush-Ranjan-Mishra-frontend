import { makeStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/hero/1.png";
import image2 from "../../assets/hero/2.png";
import image3 from "../../assets/hero/3.png";
import image4 from "../../assets/hero/4.png";
const useStyles = makeStyles((theme) => ({
  carousel: {},
  image: {},
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
    <div className={classes.carousel}>
      <Carousel
        className={classes.image}
        stopOnHover={true}
        showThumbs={false}
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        onClickItem={onClickItem}
      >
        {images.map((el) => (
          <div key={el.alt} style={{ padding: 20, height: 450 }}>
            <img src={el.image} alt={el.alt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroComponent;
