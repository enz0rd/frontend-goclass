import axios from 'axios';

// Crie uma instância do axios
const api = axios.create({
    baseURL: 'https://apidevelopment-goclass.vercel.app/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Configura o interceptor para adicionar o token nas requisições
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
