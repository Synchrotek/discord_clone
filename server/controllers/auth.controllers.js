import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Handle user register controller =====================
export const postRegister = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        // Check if user exists ---------------
        const userExists = await User.exists({ email });
        if (userExists) {
            return res.status(409).json({
                success: false,
                error: "This Email-Id is already in use.",
            })
        }
        // encrypt password -------------------
        const hashedPassword = await bcrypt.hash(password, 10);
        // save user in db --------------------
        const newUser = new User({
            username,
            email: email.toLowerCase(),
            password: hashedPassword,
        });
        await newUser.save().then(user => {
            // Create JWT token ---------------
            const token = jwt.sign(
                {
                    userId: user._id,
                    email
                },
                process.env.TOKEN_KEY,
                { expiresIn: "24h" }
            );
            return res.status(201).json({
                success: true,
                message: 'User created successfully',
                userDetails: {
                    email: newUser.email,
                    username: newUser.username,
                    token: token,
                },
            })
        }).catch(err => {
            console.log('Error occurred while saving user in db: ', err);
            return res.status(500).json({
                success: false,
                error: "Error occurred while saving user in db.",
            })
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'RegisterError occured. Please try again',
            error: err.message,
        })
    }
};

// Handle user login controller ========================
export const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check if user exists ------------------------
        await User.findOne({ email: email.toLowerCase() })
            .then(async (user) => {
                // validate user given password---------
                const passwordValidate = await bcrypt.compare(password, user.password);
                if (!passwordValidate) {
                    return res.status(500).json({
                        success: false,
                        message: "Invalid credentials. Please try again",
                    })
                }
                // Create token --------------------
                const token = jwt.sign(
                    {
                        userId: user._id,
                        email
                    },
                    process.env.TOKEN_KEY,
                    { expiresIn: "24h" }
                );
                return res.status(200).json({
                    success: true,
                    message: "Login successful",
                    userDetails: {
                        email: user.email,
                        username: user.username,
                        token: token,
                    }
                })
            }).catch((err) => {
                return res.status(500).json({
                    success: false,
                    message: "EmailId isn't found. Please Signup",
                    error: err.message,
                })
            });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'LoginError occured. Please try again',
            error: err.message,
        })
    }
};