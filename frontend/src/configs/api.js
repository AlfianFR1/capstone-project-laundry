import axios from 'axios';

const isProd = import.meta.env.MODE === 'production';
const devApiUrl = import.meta.env.VITE_DEV_API_URL;
const prodApiUrl = import.meta.env.VITE_PROD_API_URL;

const baseUrl = isProd ? prodApiUrl : devApiUrl;

const api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
