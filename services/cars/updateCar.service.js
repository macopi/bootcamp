const Car = require('../../models/cars.model');

exports.updateCarService = async(req) => {
    const coche = await Car.findByIdAndUpdate(req.params.id, {
        company: req.body.company,
        model: req.body.model,
        year: req.body.year,
        sold: req.body.sold,
        price: req.body.price,
        extras: req.body.extras
    }, {
        new: true
    });
    return coche;
}