import React, { lazy } from 'react';
import Helmet from "react-helmet";

const HeroComponent = lazy(() => import('../../components/home/hero.component'));
const CategoriesGridView = lazy(() => import('../../components/home/categoryGridView.component'));
const SecondaryCarousel = lazy(() => import('../../components/home/secondaryCarousel.component'));


const HomePageScreen = () => {
  return (
    <>
      <Helmet title="VuyIt" />
      <HeroComponent />
      <CategoriesGridView />
      {/* <SecondaryCarousel /> */}
    </>
  );
};

export default HomePageScreen;
