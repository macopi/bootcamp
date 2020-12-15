const getAllCarsService = require('../../services/cars/getAllCars.service')

exports.getAllCarsController = async(req, res, next) => {
    const cars = await getAllCarsService.getAllCars();
    if (!cars.length) return res.status(404).send('No hay Coches');
    else return res.status(200).send(cars);
}