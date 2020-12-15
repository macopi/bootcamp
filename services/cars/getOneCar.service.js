const Car = require('../../models/cars.model');

exports.getOneCar = async(req) => {
    const car = await Car.findById({ _id: req.params.id })
    return car;
}