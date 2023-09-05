import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectRoute({ children }) {
  const isAuthenticate = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticate) {
    return <Navigate to="/" />;
  }
  return children;
}
