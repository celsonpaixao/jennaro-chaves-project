import DogModel, { DogsResponse } from "../../../model/dog_model";
import { API_CONFIG } from "../api_configs";
import axios from "axios";

const apiClient = axios.create({
  baseURL: API_CONFIG.baseUrl,
  timeout: API_CONFIG.timeout,
});
export const DogService = {
   async getAll(): Promise<DogModel[]> {
    try {
      const response = await apiClient.get<DogsResponse>(
        API_CONFIG.endpoints.dogs
      );
      var serverResponse =  response.data.data.map(dog => ({
        ...dog,
      }));
      console.log("Server Response:", serverResponse);
      return serverResponse;
    } catch (error) {
      console.error("Error fetching dogs:", error);
      throw error;
    }
  },
  async getById(id: string): Promise<DogModel> {
    try {
      const response = await apiClient.get<DogModel>(
        `${API_CONFIG.endpoints.dogs}/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching dog ${id}:`, error);
      throw error;
    }
  },
  async deleteDog(id: number): Promise<void> {
    try {
      await apiClient.delete(`/dogs/${id}`);
    } catch (error) {
      console.error(`Error deleting dog ${id}:`, error);
      throw error;
    }
  },
  async createDog(data: {
    dogSizeId: number;
    commercialTypeId: number;
    raceId: number;
    name: string;
    birthDate: string;
    sex: string;
    status: number;
    description: string;
    photo?: File; 
    }): Promise<any> {
    try {
      const form = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          form.append(key, value as any);
        }
      });
      const response = await apiClient.post("/dogs", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
},
  
};