import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  // If not logged in → redirect to login
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
