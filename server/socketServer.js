import { Server } from 'socket.io';
import verifyTokenSocket from './middleware/authSocket.middleware.js';
import newConnectionHandler from './socketHandlers/newConnectionHandler.js';
import disconnectHandler from './socketHandlers/disconnectHandler.js';

export const registerSocketServer = (server) => {
    const io = new Server(server, {
        cors: {
            origin: process.env.CLIENT_URL,
            methods: ['GET', 'POST']
        },
    });

    io.use((socket, next) => {
        verifyTokenSocket(socket, next);
    });

    io.on("connection", (socket) => {
        console.log("user connected");
        console.log(socket.id);

        newConnectionHandler(socket, io);

        socket.on('disconnect', () => {
            disconnectHandler(socket);
        });
    });
};