const User = require("../../models/users.model");

exports.deleteUserService = async(id) => {
    const user = await User.findByIdAndDelete(id);
    return user;
}