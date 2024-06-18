import axios from 'axios';
import { logout } from '../utils/auth';

const apiclient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_ENDPOINT,
    timeout: 3000
});

// middleware ========================================================
apiclient.interceptors.request.use((config) => {
    const userDetailes = localStorage.getItem('user');

    if (userDetailes) {
        const token = JSON.parse(userDetailes).token;
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

// public routes ======================================================
export const postLogin = async (data) => {
    try {
        return await apiclient.post('/auth/login', data);
    } catch (error) {
        return {
            success: false,
            error
        };
    }
};
export const postRegister = async (data) => {
    try {
        return await apiclient.post('/auth/register', data);
    } catch (error) {
        return {
            success: false,
            error
        };
    }
};

// secure routes ----------------------------------
export const sendFriendsInvitation = async (data) => {
    try {
        return await apiclient.post('/friend-invitation/invite', data);
    } catch (error) {
        checkResponseCode(error);
        return {
            success: false,
            error
        };
    }
}

// utils ========================================================
const checkResponseCode = (error) => {
    const responseCode = error?.response?.status;

    if (responseCode) {
        (responseCode === 401 || responseCode === 403) && logout();
    }
};