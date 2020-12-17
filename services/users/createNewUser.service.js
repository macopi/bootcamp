const User = require("../../models/users.model");
const bcrypt = require('bcrypt');
const USER_JWT_PASSWORD = 'password';
const jwt = require('jsonwebtoken');
const { generateToken } = require("../auth/generateToken.service");

exports.createNewUser = async(bUser) => {
    let user = await User.findOne({ email: bUser.email });
    if (user) throw { error: 'Este usuario ya existe' };

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(bUser.password, salt);

    user = new User({
        name: bUser.name,
        isCustomer: false,
        email: bUser.email,
        password: hashPassword
    });

    const result = await user.save();
    return { data: result, token: generateToken(result._id, user.name) };
}