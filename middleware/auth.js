const jwt = require('jsonwebtoken');
const USER_JWT_PASSWORD = process.env.JWTPASSWORD || 'password';


exports.authT = (req, res, next) => {
    const jwtToken = req.header('Authorization');
    if (!jwtToken) return res.status(401).send('Acceso denegado');

    try {
        const payload = jwt.verify(jwtToken, USER_JWT_PASSWORD);
        req.user = payload;
        next();
    } catch (e) {
        res.status(401).send('Acceso denegado');
    }
}