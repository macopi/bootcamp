
    const Sale = require("../../models/sales.model")

    exports.getOneSale = async(id) => {
        const sale = await Sale.findById({ _id: id });
        return sale;
    }
    