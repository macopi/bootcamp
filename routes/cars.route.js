const express = require('express')
const router = express.Router();

/// IMPORTANCIÓN DE CONTROLADORES
const { getAllCarsController } = require('../controllers/cars/getAllCars.controller');
const { createNewCarController } = require('../controllers/cars/createNewCar.controller');
const { getOneCarController } = require('../controllers/cars/getOneCar.controller');
const { updateCarController } = require('../controllers/cars/updateCar.controller');
const { deleteCarController } = require('../controllers/cars/deleteCar.controller');

router.get('/', getAllCarsController);
router.get('/:id', getOneCarController)
router.post('/', createNewCarController)
router.put('/:id', updateCarController)
router.delete('/:id', deleteCarController)

module.exports = router;