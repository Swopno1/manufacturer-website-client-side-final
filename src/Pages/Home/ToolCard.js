import React from "react";
import { useNavigate } from "react-router-dom";

const ToolCard = ({ tool }) => {
  const { name, img, description, minOrderQty, availableQty, price } = tool;
  let navigate = useNavigate();
  return (
    <div className="card w-96">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-between">
          <p>{`Price: $${price}`}</p>
          <button className="btn btn-secondary">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
