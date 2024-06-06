import toast from 'react-hot-toast';
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
        const response = await api.postLogin(userDetails);
        // toast.success(response);
        // response.data.message

        if (response.error) {
            toast.error(response.error.response.data.message);
            // show error message in alert
        } else {
            const { userDetails } = response.data;
            localStorage.setItem('user', JSON.stringify(userDetails));

            dispatch(authSliceActions.AUTH_SET_USER_DETAILS({ userDetails }));
            toast.success(response.data.message);
            navigate('/dashboard');
        }
    }
}

const authActionsRegister = (userDetails, navigate) => {
    return async (dispatch) => {
        const response = await api.postRegister(userDetails);

        if (response.error) {
            toast.error(response.error.response.data.error);
            // show error message in alert
        } else {
            const { userDetails } = response.data;
            localStorage.setItem('user', JSON.stringify(userDetails));

            dispatch(authSliceActions.AUTH_SET_USER_DETAILS({ userDetails }));
            toast.success(response.data.message);
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
        setUserDetails: (userDetails) => {
            dispatch(setUserDetails(userDetails))
        },
    }
}