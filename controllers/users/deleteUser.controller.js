const { deleteUserService } = require("../../services/users/deleteUser.service");

exports.deleteUserController = async(req, res) => {
    const user = await deleteUserService(req.params.id)
    if (!user) {
        return res.status(404).send('coche no encontrado');
    } else {
        return res.status(200).send('Coche Borrado');
    }
}