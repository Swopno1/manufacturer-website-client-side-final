import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import CorporateDeal from "./CorporateDeal";
import LatestNews from "./LatestNews";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <CorporateDeal></CorporateDeal>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
