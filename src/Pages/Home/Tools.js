import React from "react";

const Tools = () => {
  return (
    <div class="hero bg-base-100 mb-24">
      <div class="hero-content flex-col lg:flex-row lg:gap-36">
        <img
          src="https://api.lorem.space/image/movie?w=260&h=400"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="text-right">
          <h1 class="text-5xl font-bold">Our Tools</h1>
          <p class="py-6">
            We have a wide range of tools for your personal and professional
            need. But we mainly offer best tools for home or personal usages.
            Here is some trending tools that is highly demanded right now. Or
            just click the bellow button to show all the tools available in the
            store.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Tools;
