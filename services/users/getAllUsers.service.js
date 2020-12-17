const User = require("../../models/users.model");

exports.getAllUsers = async() => {
    const users = await User.find()
    return users;
}