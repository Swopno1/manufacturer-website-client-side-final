import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="bg-secondary text-xl text-base-100 w-40 h-14">
      {children}
    </button>
  );
};

export default PrimaryButton;
