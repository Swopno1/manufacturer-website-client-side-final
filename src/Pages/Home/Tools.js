import React, { useEffect, useState } from "react";
import PrimaryButton from "../../Shared/PrimaryButton";
import ToolCard from "./ToolCard";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4000/tools";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div className="container mx-auto bg-base-100 mb-24">
      <div className="hero mb-24">
        <div className="hero-content flex-col lg:flex-row lg:gap-36">
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="text-center lg:text-right">
            <h1 className="text-4xl font-bold">Our Tools</h1>
            <p className="py-6">
              We have a wide range of tools for your personal and professional
              need. But we mainly offer best tools for home or personal usages.
              Here is some trending tools that is highly demanded right now. Or
              just click the bellow button to show all the tools available in
              the store.
            </p>
            <PrimaryButton>Show All</PrimaryButton>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 justify-between">
        {tools.map((tool) => (
          <ToolCard key={tool._id} tool={tool}></ToolCard>
        ))}
      </div>
    </div>
  );
};

export default Tools;
