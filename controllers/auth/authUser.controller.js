const { authUser } = require("../../services/auth/authUser.service")

exports.AuthUserController = async(req, res, next) => {
    authUser(req.body)
        .then(result => res.status(201).header('Authorization', result.token).send(result.body))
        .catch(err => res.status(400).send(err))
}