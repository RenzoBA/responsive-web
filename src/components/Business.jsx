import React from "react";
import { features } from "../constants";

const Business = () => {
  return (
    <div className="max-w-6xl flex flex-col lg:flex-row md:h-screen justify-around lg:justify-between items-center mx-auto px-5 my-24 lg:my-0">
      <div className="w-3/4 lg:w-1/2 flex flex-col items-center lg:items-start gap-10 text-center lg:text-left">
        <h2 className="sm:text-6xl text-5xl font-medium">
          You do the business, we'll handle the money.
        </h2>
        <p className="text-dimWhite leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          culpa veniam ipsa, animi quaerat iure!
        </p>
        <button className="start-button">Get Started</button>
      </div>

      <div className="flex flex-col justify-around items-center h-1/2 mt-10 lg:mt-0">
        {features.map((feature, i) => (
          <div
            className={
              "box-shadow rounded-xl feature-card px-4 py-3 max-w-md flex flex-row gap-5 h-32 sm:h-auto items-center justify-center cursor-default"
            }
          >
            <img src={feature.icon} className="w-10 h-10 object-contain" />
            <div className="flex flex-col gap-1">
              <h3 className="font-medium text-lg">{feature.title}</h3>
              <p>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business;
