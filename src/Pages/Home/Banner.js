import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-neutral mb-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://api.lorem.space/image/movie?w=260&h=400"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-base-100">
            Best Tools To Make!
          </h1>
          <p className="py-6  text-base-100">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
