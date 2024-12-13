import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthorization } from "../contexts/AuthorizationContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuthorization();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
