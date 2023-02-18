import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Details_contant from "./Details_contant";

import "./fresher_banner.css";

const Details_jobs = () => {
  const name = useParams();

  const statics = `http://localhost:5000/fresher/Full_Stack_Developer`;

  const dynamic = `${process.env.REACT_APP_URL}/fresher/${name.name_category}`;

  const { data: data = [], isLoading } = useQuery({
    queryKey: ["fresher"],

    queryFn: async () => {
      const res = await axios.get(dynamic);

      return res.data.data;
    },
  });



  return (
    <div className="pt-24">
      <div className="bannerImg h-[20rem]">
        <div className="container flex items-center h-full">
          <div>
            <h1 className="text-[3rem] md:text-[3rem] text-white">
              Software Engineer
            </h1>
          </div>
        </div>
      </div>

      <div>
        <Details_contant data={data} />
      </div>
    </div>
  );
};

export default Details_jobs;
