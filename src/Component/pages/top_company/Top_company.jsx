import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Top_company_temp from "./Top_company_temp";
import "./top_company.css";

const Top_company = () => {
  const { data: data = [], isLoading } = useQuery({
    queryKey: ["top_comapy"],

    queryFn: async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL}/top_comapy`);

      return res.data.data;
    },
  });

  return (
    <div className="container py-10">
      <h1>Top company in the world</h1>
      <div className="responsive">
        {data.map((data) => (
          <Top_company_temp key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Top_company;
