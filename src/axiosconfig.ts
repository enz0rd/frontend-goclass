import axios from "axios";

// https://apidevelopment-goclass.vercel.app
// Crie uma instância do axios
const api = axios.create({
  baseURL: "https://apidevelopment-goclass.vercel.app/v1",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// Configura o interceptor para adicionar o token nas requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
