import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fsd-json-server-nu.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});
