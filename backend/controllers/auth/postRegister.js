const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/user.models.js')

const postRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // check if user exists ------------------
        const userExists = await User.exists({ email: email });

        if (userExists) {
            return res.status(400).send('E-mail already registered. Please login.');
        }
        // encrypt password ----------------------
        const encryptedPassword = await bcrypt.hash(password, 10);
        // create user and save in db ------------
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword
        });
        // create JWT token ----------------------
        const token = jwt.sign(
            { userId: user._id, email: user.email, },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(201).json({
            userDetails: {
                email: user.email,
                token: token,
                username: user.username,
            }
        })

    } catch (err) {
        return res.status(500).send("Error occured. Please try again");
    }
};

module.exports = postRegister;