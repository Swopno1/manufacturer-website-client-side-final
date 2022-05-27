import React from "react";

const ProjectCard = ({ title, description, img, link }) => {
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a href={link} className="btn btn-primary">
            Project Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
