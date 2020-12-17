const Car = require('../../models/cars.model');
const Company = require('../../models/company.model');

exports.createNewCar = async(req, res) => {
    const company = await Company.findById(req.body.company)
    if (!company) return res.status(400).send('Fabricante no encontrado');


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