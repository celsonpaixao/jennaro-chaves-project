import { useNavigate } from "react-router-dom";

export function useAppNavigation() {
  const navigate = useNavigate();

  return {
    goToHome: () => navigate("/home"),
    goToLogin: () => navigate("/login"),
    goToRegister: () => navigate("/register"),
    goToDashboard: () => navigate("/dashboard"),
    goToRoot: () => navigate("/"),
    goBack: () => navigate(-1),
    replaceToDashboard: () => navigate("/dashboard", { replace: true }),
    replaceToLogin: () => navigate("/login", { replace: true }),
  };
}
