import express from 'express';
const router = express.Router();
import { postLogin, postRegister } from '../controllers/auth.controllers.js';
import { createValidator } from 'express-joi-validation';

const validator = createValidator({});

import { loginValidate, registerValidate } from '../validators/ValidationSchemas.js'

router.post('/register', validator.body(registerValidate), postRegister);
router.post('/login', validator.body(loginValidate), postLogin);

export default router;