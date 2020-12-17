const mongoose = require("mongoose");

// requerimos los schemas
const { Created } = require("../schemas/cars/created.schema");


const salesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'car'
    },
    price: Number,
    date: Created
});

const Sales = mongoose.model('sale', salesSchema);

module.exports = Sales;