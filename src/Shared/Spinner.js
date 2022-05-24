import React from "react";
import spinner from "../Assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="container mx-auto flex text-center justify-center">
      <img src={spinner} alt="loading..." />
    </div>
  );
};

export default Spinner;
