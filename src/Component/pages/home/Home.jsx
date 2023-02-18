import React from "react";
import Experienced from "../experienced_job/Experienced";
import Fresher_jobs from "../fresher_job_section/Fresher_jobs";
import Hero_banner from "../hero_banner_section/Hero_banner";
import Top_company from "../top_company/Top_company";

const Home = () => {
  return (
    <div className="">
      {/* controll space for fixed header */}
      <div className="pt-[81px]"></div>

      {/* hero banner section */}
      <Hero_banner />

      {/* jobs for fresher */}
      <Fresher_jobs />

      {/* Experienced section */}
      <Experienced />

      {/* top company */}
      {/* <Top_company /> */}
    </div>
  );
};

export default Home;
