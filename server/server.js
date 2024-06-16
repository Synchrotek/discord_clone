import express from 'express';
import http from 'http';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import * as socketServer from './socketServer.js';
config();

// routes import -------------------------
import authRoutes from './routes/auth.routes.js'

const PORT = process.env.PORT || 4500;

const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL
}));

// registering routes --------------------
app.use('/api/auth', authRoutes);

const server = http.createServer(app);
socketServer.registerSocketServer(server);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
            console.log('Conenected to DB');
        })
    }).catch(err => {
        console.log('Database connection failure. Server not started');
        console.log(err);
    })