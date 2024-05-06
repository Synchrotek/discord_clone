const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 4500;

const app = express();
app.use(express.json());
app.use(cors());


const server = http.createServer(app);

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