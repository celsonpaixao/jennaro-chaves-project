import { baseUrl } from "../../res/app_constants";

export const API_CONFIG = {
  baseUrl: baseUrl,
  timeout: 10000,
  endpoints: {
    dogs: "/dogs/list",
    dogRaces: "/race/list/races",
  },
};
