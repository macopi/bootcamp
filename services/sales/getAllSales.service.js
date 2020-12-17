const Sale = require("../../models/sales.model")

exports.getAllSales = async() => {
    const sales = await Sale
        .find()
        .populate("user car")
    return sales;
}