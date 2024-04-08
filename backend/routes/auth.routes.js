const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth/auth.controllers.js');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const authMidlleware = require('../middleware/auth.middleware.js');

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(6).max(12).required(),
    email: Joi.string().email().required()
});

const loginSchema = Joi.object({
    password: Joi.string().min(6).max(12).required(),
    email: Joi.string().email().required()
})

router.post('/register',
    validator.body(registerSchema),
    authControllers.controllers.postRegister
);

router.post('/login',
    validator.body(loginSchema),
    authControllers.controllers.postLogin
);

// rest route to vrify working of middleware -------
router.get('/test', authMidlleware, (req, res) => {
    res.send('request passed');
});

module.exports = router;