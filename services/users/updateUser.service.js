const User = require("../../models/users.model");

exports.updateUserService = async(id, userB) => {

    const user = await User.findByIdAndUpdate(id, userB, {
        new: true
    });

    return user;

}