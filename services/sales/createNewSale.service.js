const mongoose = require("mongoose");
const Car = require("../../models/cars.model");
const Sale = require("../../models/sales.model")
const User = require("../../models/users.model");
const { updateCarService } = require("../cars/updateCar.service");
const { updateUserService } = require("../users/updateUser.service");

exports.createNewSale = async(saleB) => {
    const user = await User.findById({ _id: saleB.user });
    if (!user) throw { error: "Usuario no Existe" };

    const car = await Car.findById({ _id: saleB.car });
    if (!car) throw { error: "Coche no Existe" };
    if (car.sold === true) {
        console.log('Ya fue vendido')
        throw { error: "Coche ya fue vendido" };
    }
    const sale = new Sale({
        user: saleB.user,
        car: saleB.car,
        price: saleB.price
    });


    const session = await mongoose.startSession()
    session.startTransaction()

    try {
        const result = await sale.save();
        await updateUserService(saleB.user, { isCustomer: true })
        await updateCarService(saleB.car, { sold: true })
        await session.commitTransaction();
        session.endSession();
        return result;
    } catch (e) {
        session.abortTransaction();
        session.endSession();
        throw { error: "Error en base de datos" };
    }
}