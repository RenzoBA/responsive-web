import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-w-7xl flex flex-col items-center px-5 mx-auto mt-32 divide-y divide-[#3F3E45]">
      <div className="flex flex-col gap-10 md:gap-0 items-center md:grid-cols-9 md:grid w-full mx-auto px-0 sm:px-5 mb-10 md:mb-0 h-full md:h-[35vh]">
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:col-span-4 h-full">
          <img src={logo} className="mb-5" />
          <p className="text-dimWhite px-5 w-full md:w-3/4">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex gap-5 items-start justify-between md:col-span-5 h-full w-full">
          {footerLinks.map((item) => (
            <div className="flex flex-col items-center text-center md:text-left md:items-start">
              <h4 className="font-semibold text-lg mb-5">{item.title}</h4>
              <div className="font-light flex flex-col gap-[6px] text-dimWhite text-sm lg::text-base">
                {item.links.map((link) => (
                  <a href={link.link}>{link.name}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between w-full mx-auto py-4 md:py-6 flex-col-reverse md:flex-row gap-3 md:gap-0 sm:px-10">
        <p className="text-dimWhite text-sm">
          Copyright &#169; 2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex gap-8">
          {socialMedia.map((item) => (
            <a key={item.id} href={item.link}>
              <img src={item.icon} className="w-5 h-5 object-contain" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
