import React from "react";
import Fresher_jobs from "../fresher_job_section/Fresher_jobs";
import Hero_banner from "../hero_banner_section/Hero_banner";

const Home = () => {
  return (
    <div className="">
      {/* controll space for fixed header */}
      <div className="pt-[81px]"></div>

      {/* hero banner section */}
      <Hero_banner />

      {/* jobs for fresher */}
      <Fresher_jobs />
    </div>
  );
};

export default Home;
