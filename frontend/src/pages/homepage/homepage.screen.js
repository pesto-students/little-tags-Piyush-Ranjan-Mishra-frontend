import HeroComponent from "../../components/home/hero.component";
<<<<<<< HEAD
import Helmet from 'react-helmet';
=======
import CategoriesGridView from "../../components/home/categoryGridView.component";
import SecondaryCarousel from "../../components/home/secondaryCarousel.component";

import Helmet from "react-helmet";
>>>>>>> dev-2

const HomePageScreen = () => {
  return (
    <>
<<<<<<< HEAD
    <Helmet title="You Are Doing Great" />
      <HeroComponent />
=======
      <Helmet title="You Are Doing Great" />
      <HeroComponent />
      <CategoriesGridView />
      {/* <SecondaryCarousel /> */}
>>>>>>> dev-2
    </>
  );
};

export default HomePageScreen;
