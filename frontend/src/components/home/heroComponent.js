import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroComponent = () => {
  const createCarouselItemImage = (index, options = {}) => (
    <div key={index}>
      <img src={`assets/hero/${index}.png`} alt="BuyIt" />
      <p className="legend">Legend {index}</p>
    </div>
  );

  const baseChildren = <div>{[1, 2, 3, 4].map(createCarouselItemImage)}</div>;
  console.log("check", baseChildren);
  return <Carousel autoPlay={true}>{baseChildren.props.children}</Carousel>;
};

export default HeroComponent;
