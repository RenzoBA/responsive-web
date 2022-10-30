import React from "react";
import { discount, logo, robot } from "../assets";
import { clients } from "../constants";

const Hero = () => {
  return (
    <div className="max-w-6xl px-5 mx-auto mb-32 flex flex-col justify-center items-center relative">
      <div className="absolute z-[0] w-[40%] h-[30%] -right-20 top-0 pink__gradient animate-pulse" />
      <div className="absolute z-[1] w-[80%] h-[75%] -right-20 rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[45%] right-0 bottom-20 blue__gradient animate-pulse" />
      <div className="flex flex-col items-center justify-start md:flex-row">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
          <img src={logo} className="h-12 mb-6 object-contain" />

          <div className="flex flex-row items-center font-light gap-1 bg-discount-gradient w-fit py-1 px-[6px] rounded-xl uppercase text-sm lg:text-base">
            <img src={discount} className="w-8 h-8" />
            <p>
              <strong>20%</strong> discount for <strong>1 month</strong> account
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="sm:text-7xl text-6xl font-semibold leading-[75px] sm:leading-[100px] w-full md:w-[700px]">
              The Next <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Generation</span>
              <br className="sm:block hidden" /> Payment Method.
            </h1>
            <p className="max-w-md mt-5 text-dimWhite leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              eaque eligendi sint velit perferendis earum expedita, fugit
              recusandae? Cumque, obcaecati!
            </p>
          </div>
        </div>
        <img
          src={robot}
          className="w-[65%] h-[65%] z-0 relative right-48 xl:right-24 hidden lg:block"
        />
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-5 lg:gap-0 lg:grid-rows-1 justify-around items-center w-full my-8">
        {clients.map((client) => (
          <img
            key={client.id}
            src={client.logo}
            className="w-40 sm:w-44 h-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
