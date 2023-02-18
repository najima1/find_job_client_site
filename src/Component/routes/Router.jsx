import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import About from "../pages/about/About";
import Error_page from "../pages/error_page/Error_page";
import Details_jobs from "../pages/fresher_job_section/Details_jobs";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/sign_up/Signup";
import PrivateRoute from "../privateRoute/PrivateRoute";

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
        path: "/Software",
        element: <Details_jobs />,
      },
      {
        path: "/marketar",
        element: <Details_jobs />,
      },
      {
        path: "/marketar2",
        element: <Details_jobs />,
      },
      {
        path: "/wordpress",
        element: <Details_jobs />,
      },
      {
        path: "/visual",
        element: <Details_jobs />,
      },
      {
        path: "/software2",
        element: <Details_jobs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contack",
        element: <About />,
      },

      {
        path: "/:name_category",
        element: (
          <PrivateRoute>
            <Details_jobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
export default router;
