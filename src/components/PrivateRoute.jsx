import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute() {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoute;