import React from "react";
import { apple, bill, card, google } from "../assets";

const Business = () => {
  return (
    <div className="max-w-6xl flex flex-col lg:flex-row-reverse h-screen justify-around lg:justify-between items-center mx-auto px-5 relative my-24 lg:my-0">
      <div className="absolute z-[0] w-[40%] h-[30%] -left-20 top-0 pink__gradient animate-pulse" />
      <div className="absolute z-[1] w-[80%] h-[75%] -left-20 rounded-full white__gradient bottom-40 " />
      <div className="absolute z-[0] w-[50%] h-[45%] left-0 bottom-20 blue__gradient" />
      <div className="w-3/4 lg:w-1/2 flex flex-col items-center lg:items-start gap-10 text-center lg:text-left">
        <h2 className="sm:text-6xl text-5xl font-medium">
          Easily control your billing & invoicing.
        </h2>
        <p className="text-dimWhite leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          culpa veniam ipsa, animi quaerat iure!
        </p>
        <div className="flex gap-3">
          <img src={apple} />
          <img src={google} />
        </div>
      </div>

      <img src={bill} className="h-1/2 mt-6 lg:mt-0" />
    </div>
  );
};

export default Business;
