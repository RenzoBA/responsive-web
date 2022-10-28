import React from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <div className="max-full flex flex-row justify-around items-center mx-auto my-24 bg-gray-gradient box-shadow">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex justify-center items-center lg:items-end flex-col lg:flex-row my-10 text-center"
        >
          <p className="font-bold text-3xl md:text-5xl xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </p>
          <p className="font-semibold text-md md:text-xl xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase lg:ml-3 animate-pulse">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
