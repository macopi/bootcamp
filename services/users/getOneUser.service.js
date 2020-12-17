const User = require("../../models/users.model")

exports.getOneUser = async(id) => {
    const user = await User.findById({ _id: id });
    return user;
}