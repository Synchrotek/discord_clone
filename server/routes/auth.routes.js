import express from 'express';
const router = express.Router();
import { postLogin, postRegister } from '../controllers/auth.controllers.js';
import { createValidator } from 'express-joi-validation';
import { verifyToken } from '../middleware/auth.middleware.js';

const validator = createValidator({});

import { loginValidate, registerValidate } from '../validators/ValidationSchemas.js'

router.post('/register', validator.body(registerValidate), postRegister);
router.post('/login', validator.body(loginValidate), postLogin);

// test route to verify if our middleware is working
router.get('/test', verifyToken, (req, res) => {
    res.send("REquest Passed");
})

export default router;