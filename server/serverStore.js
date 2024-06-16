const connectedUsers = new Map();

export const addNewConnectedUsers = ({ socketId, userId }) => {
    connectedUsers.set(socketId, { userId });
    console.log("new connected users: ", connectedUsers);
};

export const removeConnectedUser = (socketId) => {
    if (connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId);
        console.log("connected users: ", connectedUsers);
    }
}

