const Car = require('../../models/cars.model');


exports.getAllCars = async() => {
    const cars = await Car
        .find()
        .populate('company', 'name country')
    return cars;
}