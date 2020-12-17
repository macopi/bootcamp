const Car = require('../../models/cars.model');

exports.updateCarService = async(id, bCar) => {
    const coche = await Car.findByIdAndUpdate(id, bCar, {
        new: true
    });
    return coche;
}