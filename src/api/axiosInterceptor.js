import axios from "axios";
import { BASE_URL } from "@utils/constants/constants.url";

const apiClient = axios.create({
  baseURL: 'https://images-api.nasa.gov/',
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;