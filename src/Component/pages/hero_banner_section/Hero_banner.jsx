import React from "react";
import "./hero_banner.css";

const Hero_banner = () => {
  return (
    <div className="bg_banner md:h-[38rem] flex items-center md:py-[10rem]">
      <div className="container py-6 ">
        <p className="text-4xl md:text-[80px] w-[68%]  block py-6  ">
          <span className="md:block md:py-11">Find the most</span>
          <span>
            exciting <span className="text-[#273c75]">startup jobs</span>{" "}
          </span>
        </p>

        {/* find the location job */}
        <div className="find_jobs md:pt-7 space-y-1 md:space-y-0">
          <input
            type="text"
            className="outline-none py-4 px-2 rounded-sm shadow-sm md:text-2xl md:py-3 border-r-2 border-r-teal-600"
            placeholder="Find the job"
          />

          <select
            name=""
            id=""
            className="outline-none py-4 px-5 rounded-sm shadow-sm md:text-2xl md:py-3"
          >
            <option value="location_pak">Location BD</option>
            <option value="location_bd">Location PAK</option>
            <option value="location_us">Location UK</option>
          </select>

          <button className="py-4 px-5 rounded-sm shadow-sm md:text-2xl md:py-3 bg-[#FB246A] text-white block md:inline-block my-4 md:my-0 w-[40%] pb-3">
            Find job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero_banner;
