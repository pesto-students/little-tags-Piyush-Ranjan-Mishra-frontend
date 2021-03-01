import HeroComponent from "../../components/home/hero.component";
import CategoriesGridView from "../../components/home/categoryGridView.component";
import SecondaryCarousel from "../../components/home/secondaryCarousel.component";

import Helmet from "react-helmet";

const HomePageScreen = () => {
  return (
    <>
      <Helmet title="You Are Doing Great" />
      <HeroComponent />
      <CategoriesGridView />
      {/* <SecondaryCarousel /> */}
    </>
  );
};

export default HomePageScreen;
