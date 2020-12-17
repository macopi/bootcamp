const createNewUserService = require('../../services/users/createNewUser.service');

exports.createNewUserController = async(req, res, next) => {
    createNewUserService.createNewUser(req.body)
        .then(result => res.status(201).header('Authorization', result.token).send(result.data))
        .catch(err => res.status(400).send(err))
}