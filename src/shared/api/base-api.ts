import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fsd-json-server.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
