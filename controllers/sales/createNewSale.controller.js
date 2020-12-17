const { createNewSale } = require('../../services/sales/createNewSale.service');

exports.createNewSaleController = async(req, res, next) => {
    createNewSale(req.body)
        .then(result => res.status(201).send(result))
        .catch(err => res.status(400).send(err))
}