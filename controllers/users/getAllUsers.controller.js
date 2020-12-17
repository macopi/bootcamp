const { getAllUsers } = require("../../services/users/getAllUsers.service");

exports.getAllUsersController = async(req, res, next) => {
    const users = await getAllUsers();
    if (!users.length) return res.status(404).send('No hay Coches');
    else return res.status(200).send(users);
}