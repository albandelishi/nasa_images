import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://images-api.nasa.gov',
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;