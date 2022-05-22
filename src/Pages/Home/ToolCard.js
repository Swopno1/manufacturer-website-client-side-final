import React from "react";

const ToolCard = ({ tool }) => {
  const { name, img, description, minOrderQty, availableQty } = tool;
  return (
    <div class="card w-96">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <div class="card-actions justify-between">
          <p>{`Min Order: ${minOrderQty}`}</p>
          <p>{`Available Stock: ${availableQty}`}</p>
          <p>{`Price: ${availableQty}`}</p>
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
