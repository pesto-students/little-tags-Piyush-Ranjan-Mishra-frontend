import HeroComponent from "../../components/home/hero.component";
import Helmet from 'react-helmet';

const HomePageScreen = () => {
  return (
    <>
    <Helmet title="You Are Doing Great" />
      <HeroComponent />
    </>
  );
};

export default HomePageScreen;
