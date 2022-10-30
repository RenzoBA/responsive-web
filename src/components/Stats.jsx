import React from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <div className="max-full flex flex-row justify-around items-center mx-auto my-24 px-5 gap-5 bg-gray-gradient box-shadow">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex justify-center items-center self-start lg:items-end flex-col lg:flex-row my-10 text-center w-1/3"
        >
          <p className="font-bold text-3xl md:text-5xl text-white">
            {stat.value}
          </p>
          <p className="font-semibold text-md md:text-xl text-gradient uppercase lg:ml-3 animate-pulse">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
