import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:3000",
  timeout: 6000,
});

export default api;
