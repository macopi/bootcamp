const express = require('express')
const router = express.Router();

/// IMPORTANCIÓN DE CONTROLADORES
const { getAllSalesController } = require('../controllers/sales/getAllSales.controller');
const { createNewSaleController } = require('../controllers/sales/createNewSale.controller');
const { getOneSaleController } = require('../controllers/sales/getOneSale.controller');
const { updateSaleController } = require('../controllers/sales/updateSale.controller');

router.get('/', getAllSalesController);
router.get('/:id', getOneSaleController);
router.post('/', createNewSaleController);
router.put('/:id', updateSaleController);

module.exports = router;