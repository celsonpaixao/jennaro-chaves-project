interface DogModel {
  id: number;
  name: string;
  raceId: number;
  birthDate: string;
  sex: "M" | "F";
  status: number;
  commercialTypeId: number;
  description: string;
  photo: string;
  price: number;
  dogSizeId: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;

  qualification?: string;
  rating?: number;
}
export interface DogsResponse {
  data: DogModel[];
}

export interface DogsRice {
  id: number;
  name: string;
}
export default DogModel;

// src/model/client_model.ts
export interface Client {
  id: number;
  name: string;
  lastname: string;
  phone: string;
  email: string;
  eligibleAdoption: boolean;
}

export interface ClientsResponse {
  data: Client[];
}
