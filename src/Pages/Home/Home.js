import React from "react";
import Nav from "../../Shared/Nav";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
