// axiosConfig.js
import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Ensure this is set in your .env
});

// Add a request interceptor
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Set the Authorization header
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default api;
