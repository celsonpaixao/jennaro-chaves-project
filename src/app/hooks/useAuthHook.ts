import { useEffect, useState } from "react";
import { useSnackbarStore } from "../store/snackbarStore";
import { AuthService, CreateClientDTO } from "../data/remote/auth/service";

interface User {
  email: string;
  name: string;
}

export function useAuthHook() {
  const { showSnackbar } = useSnackbarStore();
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem("auth_token");
    const savedUser = localStorage.getItem("auth_user");

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }

    setInitializing(false);
  }, []);

  const registerClient = async (data: CreateClientDTO) => {
    try {
      setLoading(true);
      await AuthService.registerClient(data);
      showSnackbar("Cliente registrado com sucesso!", "success");
    } catch (error) {
      console.error("Erro ao registrar cliente:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Erro inesperado ao registrar cliente.";

      showSnackbar(errorMessage, "error");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await AuthService.login(email, password);

      setUser(response.user);
      setToken(response.token);

      localStorage.setItem("auth_token", response.token);
      localStorage.setItem("auth_user", JSON.stringify(response.user));

      showSnackbar("Login com sucesso!", "success");
    } catch (error) {
      console.error("Erro ao logar:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Erro inesperado ao logar.";

      showSnackbar(errorMessage, "error");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    email: string,
    password: string,
    name: string,
    lastname: string
  ) => {
    try {
      setLoading(true);
      await AuthService.register({ email, password, name, lastname }); // ← usando o AuthService

      showSnackbar("Conta criada com sucesso!", "success");
    } catch (error) {
      console.error("Erro ao registrar:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Erro inesperado ao registrar.";

      showSnackbar(errorMessage, "error");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
  };

  const isAuthenticated = !!token;

  return {
    login,
    register,
    logout,
    user,
    token,
    isAuthenticated,
    loading,
    initializing,
    registerClient,
  };
}
