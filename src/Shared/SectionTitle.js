import React from "react";

const SectionTitle = ({ children, className }) => {
  return <h2 className={`text-3xl font-bold my-6 ${className}`}>{children}</h2>;
};

export default SectionTitle;
