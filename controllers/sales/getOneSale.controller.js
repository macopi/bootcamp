
const getOneSaleService = require('../../services/sales/getOneSale.service');

exports.getOneSaleController = async(req, res) => {
    const sale = await getOneSaleService.getOneSale(req.params.id);
    if (!sale) return res.status(404).send('Error de no encontrado')
    return res.status(200).send(sale);
}
    