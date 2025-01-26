import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001", // Ensure this matches your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwtToken');
  console.log('Token:', token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { api };
