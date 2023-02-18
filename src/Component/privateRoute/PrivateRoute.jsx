import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext/ContextProvider";


const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { loading, user } = useContext(AuthContext);

  if (loading) return <h1>Loading data</h1>;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
