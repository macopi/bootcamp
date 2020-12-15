const updateCarService = require('../../services/cars/updateCar.service')


exports.updateCarController = async(req, res) => {
    const coche = await updateCarService.updateCarService(req);
    if (!coche) {
        return res.status(404).send('coche no encontrado');
    }
    res.status(204).send(coche);
}