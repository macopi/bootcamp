const { getOneUser } = require("../../services/users/getOneUser.service");

exports.getOneUserController = async(req, res) => {
    const user = await getOneUser(req.params.id);
    if (!user) return res.status(404).send('No encontrado :C')
    return res.status(200).send(user);
}