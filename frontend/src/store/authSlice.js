import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    userDetails: {}
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        AUTH_SET_USER_DETAILS(state, action) {
            state.userDetails = action.payload.userDetails;
        }
    }
});

export const authSliceActions = authSlice.actions;
export default authSlice.reducer;