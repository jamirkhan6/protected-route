import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const loggedIn = localStorage.getItem("loggedIn"); // check login state
  return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
