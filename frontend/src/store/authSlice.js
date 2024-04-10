import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    userDetailes: {}
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        dummy(state) {
            state.userDetailes = state.userDetailes;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;