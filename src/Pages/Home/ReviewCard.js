import React from "react";

const ReviewCard = ({ user, title, review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-start">
          <p className="text-3xl font-bold text-secondary w-8">"</p>
          <div>
            <h2 className="card-title">{user}</h2>
            <p>{title}</p>
          </div>
        </div>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
