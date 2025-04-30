import React from "react";
import { assets } from "../assets/assets";
import p_img8 from "../assets/p_img8.png";
import p_img37 from "../assets/p_img37.png";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* left image */}
      <img
        className="w-full sm:w-1/4 border border-gray-300"
        src={p_img8}
        alt=""
      />
      {/* Middle content */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">Shop Now</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* right image */}

      <img
        className="w-full sm:w-1/4 border border-gray-300"
        src={p_img37}
        alt=""
      />
    </div>
  );
};

export default Hero;
