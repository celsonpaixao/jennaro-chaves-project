import axios from "axios";
import { API_CONFIG } from "../api_configs";

const apiClient = axios.create({
  baseURL: API_CONFIG.baseUrl,
  timeout: API_CONFIG.timeout,
});

export const AuthService = {
  async login(email: string, password: string) {
    const response = await apiClient.post("/session/user", { email, password });
    return response.data; 
  },

  async register(data: { email: string; password: string; name: string; lastname: string }) {
    const response = await apiClient.post("/users", data);
    return response.data;
  },
}