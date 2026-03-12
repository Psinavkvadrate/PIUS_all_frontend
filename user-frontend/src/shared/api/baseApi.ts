import axios from "axios";

export const baseApi = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

baseApi.interceptors.request.use((config) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMDAwMDBhYS0wMDAwLTBhMDAtMGFhMC1hMDBhMGEwMDAwMGEifQ._PQ4GHbZ5tKH6sAzPIRU_XiYfLpyai5vHFEYvIF12LE";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
