const createNewCarService = require('../../services/cars/createNewCar.service');

exports.createNewCarController = async(req, res, next) => {
    createNewCarService.createNewCar(req)
        .then(result => res.status(201).send(result))
        .catch(err => res.status(400).send(err))
}