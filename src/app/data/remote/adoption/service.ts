import axios from "axios";
import { API_CONFIG } from "../api_configs";

const apiClient = axios.create({
  baseURL: API_CONFIG.baseUrl,
  timeout: API_CONFIG.timeout,
});
export const AdoptionService = {
  async createAdoption(data: { dogId: number; clientId: number; userId: number }) {
    const response = await apiClient.post("/adoptions", data);
    return response.data;
  },
};