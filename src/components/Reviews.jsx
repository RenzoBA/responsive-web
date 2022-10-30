import React from "react";
import { quotes } from "../assets";
import { feedback } from "../constants";

const Reviews = () => {
  return (
    <div className="max-w-6xl flex flex-col h-full md:h-screen justify-around items-center mx-auto my-24 lg:my-0 px-5 relative">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] md:-right-[35%] rounded-full blue__gradient bottom-40 animate-pulse" />
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 text-center lg:text-left">
        <h2 className="sm:text-6xl text-5xl font-medium">
          What people are saying about us.
        </h2>
        <p className="text-dimWhite leading-relaxed">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-16 md:mt-0">
        {feedback.map((user, i) => (
          <div
            key={user.id}
            className={
              "feedback-card box-shadow rounded-lg p-8 w-4/5 h-fit md:w-[min(33%,320px)] md:h-80 flex flex-col justify-between items-start gap-8 cursor-default"
            }
          >
            <img src={quotes} />
            <p className="font-light w-[90%] self-center">{user.content}</p>
            <div className="flex flex-row items-center gap-3 w-full justify-end text-right">
              <div>
                <p>{user.name}</p>
                <p className="text-sm text-dimWhite">{user.title}</p>
              </div>
              <img src={user.img} className="w-10 h-10 object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
