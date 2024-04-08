const User = require('../../models/user.models.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // check if user exists ------------------
        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) {
            return res.status(400).send('Email is not recognised. Please register.');
        }

        if (await bcrypt.compare(password, user.password)) {
            // send new token --------------------
            const token = jwt.sign(
                { userId: user._id, email: user.email, },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            return res.status(200).json({
                userDetails: {
                    email: user.email,
                    token: token,
                    username: user.username,
                }
            })
        }

        return res.status(400).send('Invalid credentials. Please try again.');

    } catch (err) {
        return res.status(500).send("Error occured. Please try again");
    }
}

module.exports = postLogin;