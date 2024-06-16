import { createSlice } from '@reduxjs/toolkit';

const initialFriendsState = {
    friends: [],
    pendingInvitaions: [],
    onlineUsers: []
}

const friendsSlice = createSlice({
    name: 'friends',
    initialState: initialFriendsState,
    reducers: {
        SET_FRIENDS(state, action) {
            state.friends = action.payload.friends;
        },
        SET_PENDING_FRIENDS_INVITAIONS(state, action) {
            state.pendingInvitaions = action.payload.pendingInvitaions;
        },
        SET_ONLINE_USERS(state, action) {
            state.onlineUsers = action.payload.onlineUsers;
        },
    }
});

export const friendsSliceActions = friendsSlice.actions;
export default friendsSlice.reducer;