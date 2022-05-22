import React from "react";
import SummeryCard from "./SummeryCard";

const BusinessSummary = () => {
  return (
    <div className="bg-base-200 pb-24 pt-6">
      <div className="container mx-auto">
        <div className="text-center lg:text-left w-96">
          <h1 className="text-4xl font-bold">Business Summery</h1>
          <p className="py-6">
            Your need is our first priority. We are focusing to build the best
            tools for your household use. Long lasting life, user-friendly, and
            offering competitive price is our main focus.
          </p>
        </div>
        <div className="flex justify-start gap-4">
          <SummeryCard
            key={"01"}
            sl="01"
            cardTitle="Long life"
            cardDetails="Our tools will serve year after year without any further repairing or replacement."
          ></SummeryCard>
          <SummeryCard
            key={"02"}
            sl="02"
            cardTitle="User friendly"
            cardDetails="Anyone can use these tools without any prior experience or expertise."
          ></SummeryCard>
          <SummeryCard
            key={"03"}
            sl="03"
            cardTitle="Competitive Price"
            cardDetails="Wem offer best price for best value. You can compare with other available option."
          ></SummeryCard>
        </div>
      </div>
    </div>
  );
};
export default BusinessSummary;
