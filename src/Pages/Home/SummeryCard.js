import React from "react";

const SummeryCard = ({ sl, cardTitle, cardDetails }) => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="text-3xl font-bold text-secondary">{sl}</p>
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDetails}</p>
      </div>
    </div>
  );
};

export default SummeryCard;
