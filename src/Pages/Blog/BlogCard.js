import React from "react";
import SectionTitle from "../../Shared/SectionTitle";

const BlogCard = ({ title, content }) => {
  return (
    <div>
      <div className="divider"></div>
      <SectionTitle className="text-secondary">{title}</SectionTitle>
      <p>{content}</p>
    </div>
  );
};

export default BlogCard;
