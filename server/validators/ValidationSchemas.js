import joi from 'joi';

export const registerValidate = joi.object({
    username: joi.string().min(3).max(12).required(),
    password: joi.string().min(3).max(12).required(),
    email: joi.string().email().required(),
});

export const loginValidate = joi.object({
    password: joi.string().min(3).max(12).required(),
    email: joi.string().email().required(),
});