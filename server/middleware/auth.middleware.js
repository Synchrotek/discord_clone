import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['authorization'];
    if (!token) {
        return res.status(403).send(
            'A Token is required for authentication.'
        )
    }
    try {
        token = token.replace(/^Bearer\s+/, "");
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    } catch (error) {
        return res.status(403).send(
            'Invalid token.'
        )
    }
    return next();
};