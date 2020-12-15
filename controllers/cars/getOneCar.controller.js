const getOneCarService = require('../../services/cars/getOneCar.service');

exports.getOneCarController = async(req, res) => {
    const car = await getOneCarService.getOneCar(req);
    if (!car) return res.status(404).send('No encontrado :C')
    return res.status(200).send(car);
}