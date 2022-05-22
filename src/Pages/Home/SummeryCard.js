import React from "react";

const SummeryCard = ({ sl, cardTitle, cardDetails }) => {
  return (
    <div class="card w-72 bg-base-100 shadow-xl">
      <div class="card-body">
        <p className="text-4xl font-bold text-secondary">{sl}</p>
        <h2 class="card-title">{cardTitle}</h2>
        <p>{cardDetails}</p>
      </div>
    </div>
  );
};

export default SummeryCard;
