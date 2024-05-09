const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    express.send('Register route');
});

router.post('/login', (req, res) => {
    express.send('Login route');
});

module.exports = router;