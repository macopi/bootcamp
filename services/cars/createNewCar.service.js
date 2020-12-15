const Car = require('../../models/cars.model');

exports.createNewCar = async(req, res) => {
    const car = new Car({
        company: req.body.company,
        model: req.body.model,
        year: req.body.year,
        sold: req.body.sold,
        price: req.body.price,
        extras: req.body.extras
    });

    const result = await car.save();
    return result;
}