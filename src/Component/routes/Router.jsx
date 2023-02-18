import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Error_page from "../pages/error_page/Error_page";
import Details_jobs from "../pages/fresher_job_section/Details_jobs";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error_page />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/:name_category",
        element: <Details_jobs />,
      },
    ],
  },
]);
export default router;
