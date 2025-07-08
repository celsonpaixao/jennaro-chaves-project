import DogModel, { DogsResponse } from "../../../model/dog_model";
import { API_CONFIG } from "../api_configs";
import axios from "axios";

export interface Dog {
  id: number;
  name: string;
  birthDate: string;
  raceId: number;
  description: string;
  commercialTypeId: number;
  price: number;
  status: number;
  sex: "M" | "F";
  dogSizeId: number;
}

export interface CreateDogRequest {
  name: string;
  birthDate: string;
  raceId: number;
  description: string;
  commercialTypeId: number;
  price: number;
  status: number;
  sex: "M" | "F";
  dogSizeId: number;
}

function logFormData(data: any) {
  if (data instanceof FormData) {
    const entries: Record<string, any> = {};
    for (const [key, value] of data.entries()) {
      entries[key] = value instanceof File ? value.name : value;
    }
    return entries;
  }
  return data;
}

const apiClient = axios.create({
  baseURL: API_CONFIG.baseUrl,
  timeout: API_CONFIG.timeout,
});

apiClient.interceptors.request.use(
  (config) => {
    console.log("[API REQUEST]", {
      method: config.method?.toUpperCase(),
      url: config.baseURL + config.url,
      headers: config.headers,
      data: logFormData(config.data),
    });
    return config;
  },
  (error) => {
    console.error("[API REQUEST ERROR]", error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    console.log("[API RESPONSE]", {
      url: response.config.baseURL + response.config.url,
      status: response.status,
      data: response.data,
    });
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("[API RESPONSE ERROR]", {
        url: error.config?.baseURL + error.config?.url,
        status: error.response.status,
        data: error.response.data,
      });
    } else {
      console.error("[API NETWORK ERROR]", error.message);
    }
    return Promise.reject(error);
  }
);

export const DogService = {
  async getAll(): Promise<DogModel[]> {
    try {
      const response = await apiClient.get<DogsResponse>(
        API_CONFIG.endpoints.dogs
      );
      return response.data.data;
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
  async uploadDogImage(id: number, image: File): Promise<any> {
    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await apiClient.post(`/dogs/upload/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      console.error(`Error uploading image for dog ${id}:`, error);
      throw error;
    }
  },

  async updateDog(data: DogModel): Promise<any> {
    try {
      const response = await apiClient.put(`/dogs/`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating dog ${data.id}:`, error);
      throw error;
    }
  },

  async createDog(data: CreateDogRequest): Promise<any> {
    try {
      const response = await apiClient.post("/dogs", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("[API RESPONSE ERROR]", error);
      throw error;
    }
  },
};
