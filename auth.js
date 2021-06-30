const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('./config')
console.log('jwt_secret:', JWT_SECRET)


const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        jwt.verify(authHeader, JWT_SECRET, (err, user) => {
            if (err || user.isAdmin === false) {
                console.log("error", err)
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = {
    authenticateJWT
}
