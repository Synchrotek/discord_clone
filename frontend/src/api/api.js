import axios from 'axios';
import { logout } from '../pages/shared/utils/auth.utils';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_ENDPOINT,
    timeout: 1000
});

apiClient.interceptors.request.use((config) => {
    const userDetails = localStorage.getItem('user');

    if (userDetails) {
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (err) => {
    return Promise.reject(err);
})

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (err) {
        return { error: true, err };
    }
}

export const register = async (data) => {
    try {
        return await apiClient.post('/auth/register', data);
    } catch (err) {
        return { error: true, err };
    }
}

// secure routes

const checkResponseCode = (err) => {
    const responseCode = err?.response?.status;

    if (responseCode) {
        (responseCode === 401 || responseCode === 403) && logout();
    }
}