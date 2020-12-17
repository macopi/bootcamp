const jwt = require('jsonwebtoken');
const USER_JWT_PASSWORD = process.env.JWTPASSWORD || 'password';

exports.generateToken = (userid, username, role = 'admin') => {
    const jwToken = jwt.sign({ _id: userid, name: username, role: role }, USER_JWT_PASSWORD)
    return jwToken;
}