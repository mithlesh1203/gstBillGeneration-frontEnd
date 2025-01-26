import axios from "axios";

const api = axios.create({
  baseURL: "http://your-api-url.com", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
