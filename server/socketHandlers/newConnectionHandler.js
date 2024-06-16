import { addNewConnectedUsers } from "../serverStore.js";

const newConnectionHandler = async (socket, io) => {
    const userDetails = socket.user;

    addNewConnectedUsers({
        socketId: socket.id,
        userId: userDetails.userId,
    });
};

export default newConnectionHandler;