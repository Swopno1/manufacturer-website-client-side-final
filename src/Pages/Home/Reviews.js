import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      user: "Amir",
      title: "Developer",
      review: "Awesome product in this price range.",
    },
    {
      _id: 2,
      user: "Liban",
      title: "Developer",
      review: "Awesome product in this price range.",
    },
    {
      _id: 3,
      user: "Priya",
      title: "Developer",
      review: "Awesome product in this price range.",
    },
  ];

  return (
    <div className="bg-base-100 pb-24 pt-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold pb-6">Reviews</h1>
        <div className="flex justify-between gap-6">
          {reviews.map((review) => (
            <ReviewCard
              key={review._id}
              user={review.user}
              title={review.title}
              review={review.review}
            ></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
