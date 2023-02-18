import React, { useEffect, useState } from "react";
import Fresher_templete from "./Fresher_templete";
import rightLogo from "../../image/support-img.jpg.webp";
import { useQuery } from "react-query";
import axios from "axios";
import "./fresher_banner.css";

const Fresher_jobs = () => {
  const { data: fresher_data = [], isLoading } = useQuery({
    queryKey: ["fresher"],

    queryFn: async () => {
      const res = await axios.get(
        `https://jobs-backend-isjecqddt-najima1.vercel.app/fresher`
      );
      return res.data.data;
    },
  });

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div className="fresher_banner">
      <div className="container">
        <h1 className="text-2xl md:text-4xl text-[#273c75d5] py-5">
          Fresher jobs
        </h1>
        <div className="container py-4 flex justify-between gap-x-5">
          <div className="w-full">
            {fresher_data?.map((data) => (
              <Fresher_templete data={data} key={data._id} />
            ))}
          </div>

          {/* image section right  */}
          <div className="hidden lg:block">
            <img src={rightLogo} className=" object-cover" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fresher_jobs;
