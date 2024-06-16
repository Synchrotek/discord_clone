import io from 'socket.io-client';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token;

    socket = io(import.meta.env.VITE_SCOKET_ENDPOINT, {
        auth: {
            token: jwtToken,
        },
    });

    socket.on("connect", () => {
        console.log('successfully connected to scoketIo server');
        console.log(socket.id);
    });
};