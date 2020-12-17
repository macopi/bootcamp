
    const { updateSaleService } = require("../../services/sales/updateSale.service")

    exports.updateSaleController = async(req, res, next) => {
        const sale = await updateSaleService(req.params.id, req.body);
        if (!sale) return res.status(404).send('No encontrado');
        else return res.status(200).send(sale);
    }
    