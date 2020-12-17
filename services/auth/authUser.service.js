const User = require("../../models/users.model");
const bcrypt = require('bcrypt');
const { generateToken } = require("./generateToken.service");

const USER_JWT_PASSWORD = 'password';

exports.authUser = async(bLogin) => {
    let user = await User.findOne({ email: bLogin.email });
    if (!user) throw { error: 'Error en Email/Contraseña' };

    const validPassword = await bcrypt.compare(bLogin.password, user.password)
    if (!validPassword) throw { error: 'Error en Email/Contraseña' };

    return { body: 'OK', token: generateToken(user._id, user.name) };

}