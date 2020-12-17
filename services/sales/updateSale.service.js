const Car = require("../../models/cars.model");
const Sale = require("../../models/sales.model");
const User = require("../../models/users.model");

exports.updateSaleService = async(id, salesB) => {
    const user = await User.findById({ _id: saleB.user });
    if (!user) throw { error: "Usuario no Existe" };

    const car = await Car.findById({ _id: saleB.car });
    if (!car) throw { error: "Coche no Existe" };

    const sales = await Sale.findByIdAndUpdate(id, {
        user: salesB.user,
        car: salesB.car,
        price: salesB.price
    }, {
        new: true
    });
    return sales;
}