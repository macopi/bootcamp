const deleteCarService = require('../../services/cars/deleteCar.service')

exports.deleteCarController = async(req, res) => {
    const car = await deleteCarService.deleteCarService(req)
    if (!car) {
        return res.status(404).send('coche no encontrado');
    } else {
        return res.status(200).send('Coche Borrado');
    }
}