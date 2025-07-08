import axios from "axios";
import { API_CONFIG } from "../api_configs";

const apiClient = axios.create({
  baseURL: API_CONFIG.baseUrl,
  timeout: API_CONFIG.timeout,
});
export const SellService = {
  async createSell(data: { dogId: number; clientId: number; userId: number; paymentMethodId: number }) {
    const response = await apiClient.post("/sells", data);
    return response.data;
  },
};