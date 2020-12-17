const { getAllSales } = require("../../services/sales/getAllSales.service");

exports.getAllSalesController = async(req, res, next) => {
    const sales = await getAllSales();
    console.log('Ha realidado la consulta: ', req.user)
    if (!sales.length) return res.status(404).send('Error no encontrado');
    else return res.status(200).send(sales);
}