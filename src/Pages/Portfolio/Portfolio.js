import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const projects = [
    {
      _id: 1,
      title: "Project 1",
      description: "Project description",
      link: "https://reactrouter.com/docs/en/v6/hooks/use-navigate",
    },
    {
      _id: 2,
      title: "Project 2",
      description: "Project description",
      link: "https://reactrouter.com/docs/en/v6/hooks/use-navigate",
    },
    {
      _id: 3,
      title: "Project 3",
      description: "Project description",
      link: "https://reactrouter.com/docs/en/v6/hooks/use-navigate",
    },
  ];
  return (
    <div className="container mx-auto my-3">
      <PageTitle>My Portfolio</PageTitle>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/xScyRxs/Amir.jpg"
            alt="Md Amir Hossain"
            className="w-60"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Md Amir Hossain</h2>
          <p>
            <a href="mailto:amirhossain.limon@gmail.com">
              Email: amirhossain.limon@gmail.com
            </a>
            <br />
            <a href="tel:+8801819062270">Phone: 01819062270</a>
            <br />
            <br />
            <span className="font-bold text-secondary">
              Education Background
            </span>
            <br />
            MBA, Accounting & Information Systems <br />
            Rajshahi University
            <br />
            <br />
            <span className="font-bold text-secondary">
              Skills relevant to development
            </span>
            <br />
            JavaScript, Google AppsScript, React, NodeJs, ExpressJs, MongoDb,
            HTML, CSS
            <br />
          </p>
          <div className="card-actions justify-end">
            <Link to="/contact" className="btn btn-primary">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-6">
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            link={project.link}
            img="https://api.lorem.space/image/car?w=400&h=225"
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
