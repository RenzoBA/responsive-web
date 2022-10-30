import React from "react";
import { card } from "../assets";

const Business = () => {
  return (
    <div className="max-w-6xl flex flex-col lg:flex-row md:h-screen justify-around lg:justify-between items-center mx-auto px-5 my-24 lg:my-0">
      <div className="w-3/4 lg:w-1/2 flex flex-col items-center lg:items-start gap-10 text-center lg:text-left">
        <h2 className="sm:text-6xl text-5xl font-medium">
          Find a better card deal in few easy steps.
        </h2>
        <p className="text-dimWhite leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          culpa veniam ipsa, animi quaerat iure!
        </p>
        <button className="start-button">Get Started</button>
      </div>

      <img
        src={card}
        className="h-1/2 w-[500px] mt-10 lg:mt-0 object-contain"
      />
    </div>
  );
};

export default Business;
