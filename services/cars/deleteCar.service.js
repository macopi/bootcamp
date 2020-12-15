const Car = require('../../models/cars.model')

exports.deleteCarService = async(req) => {
    const car = await Car.findByIdAndDelete(req.params.id);
    return car;
}