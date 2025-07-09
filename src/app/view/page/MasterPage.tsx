import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthHook } from "../../hooks/useAuthHook";

const MasterPage = () => {
  const { isAuthenticated, initializing } = useAuthHook();
  const navigate = useNavigate();

  useEffect(() => {
    if (initializing) return;

    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated, initializing, navigate]);

  return <div>Carregando...</div>;
};

export default MasterPage;
