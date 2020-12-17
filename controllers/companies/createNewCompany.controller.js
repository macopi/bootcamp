const { createNewCompany } = require('../../services/companies/createNewCompany.service');

exports.createNewCompanyController = async(req, res, next) => {
    createNewCompany(req.body)
        .then(result => res.status(201).send(result))
        .catch(err => res.status(400).send(err))
}