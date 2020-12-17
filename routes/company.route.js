const express = require('express');
const { createNewCompanyController } = require('../controllers/companies/createNewCompany.controller');
const { deleteCompanyController } = require('../controllers/companies/deleteCompany.controller');
const { getAllCompaniesController } = require('../controllers/companies/getAllCompanies.controller');
const { getOneCompanyController } = require('../controllers/companies/getOneCompany.controller');
const { updateCompanyController } = require('../controllers/companies/updateCompany.controller');

const router = express.Router();

/// IMPORTANCIÓN DE CONTROLADORES


router.post('/', createNewCompanyController);
router.delete('/:id', deleteCompanyController);
router.get('/', getAllCompaniesController);
router.get('/:id', getOneCompanyController);
router.put('/:id', updateCompanyController);


module.exports = router;