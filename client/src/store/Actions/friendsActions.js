import toast from 'react-hot-toast';
import * as api from '../../api/api';

const sendFriendsInvitation = (data) => {
    return async (dispatch) => {
        const response = await api.sendFriendsInvitation(data);
        console.log(response);

        if (response.error) {
            toast.error(response.error.response.data.error);
        } else {
            toast.success("Invitation has been snt!");
        }
    }
}

export const getFriendsActions = (dispatch) => {
    return {
        sendFriendsInvitation: (data) => {
            dispatch(sendFriendsInvitation(data))
        },
    }
}