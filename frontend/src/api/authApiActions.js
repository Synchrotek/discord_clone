import { authSliceActions } from '../store/authSlice';
import * as api from './api';

export const authActions = {
    SET_USER_DETAILS: 'AUTH_SET_USER_DETAILS'
};

const setUserDetails = (userDetailes) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetailes,
    };
}

const authActionsLogin = (userDetails, navigate) => {
    return async (dispatch) => {
        console.log(userDetails);
        const response = await api.login(userDetails);

        if (response.error) {
            console.log(response.err.response.data)
            // show error message in alert
        } else {
            console.log(response);
            const { userDetails } = response?.data;
            localStorage.setItem('user', JSON.stringify(userDetails));

            dispatch(authSliceActions.AUTH_SET_USER_DETAILS({ userDetails }));
            navigate('/dashboard');
        }
    }
}

const authActionsRegister = (userDetails, navigate) => {
    return async (dispatch) => {
        const response = await api.register(userDetails);

        if (response.error) {
            console.log(response.err.response.data)
            // show error message in alert
        } else {
            const { userDetails } = response?.data;
            localStorage.setItem('user', JSON.stringify(userDetails));

            dispatch(authSliceActions.AUTH_SET_USER_DETAILS({ userDetails }));
            navigate('/dashboard');
        }
    }
}

export const getAuthActions = (dispatch) => {
    return {
        login: (userDetails, navigate) => {
            dispatch(authActionsLogin(userDetails, navigate))
        },
        register: (userDetails, navigate) => {
            dispatch(authActionsRegister(userDetails, navigate))
        },
    }
}