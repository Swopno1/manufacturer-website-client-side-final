import React from "react";
import Nav from "../../Shared/Nav";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
    </div>
  );
};

export default Home;
