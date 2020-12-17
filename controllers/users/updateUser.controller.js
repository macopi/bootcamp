const { updateUserService } = require("../../services/users/updateUser.service")

exports.updateUserController = async(req, res, next) => {
    const user = await updateUserService(req.params.id, req.body);
    if (!user) return res.status(404).send('No encontrado');
    else return res.status(200).send(user);
}