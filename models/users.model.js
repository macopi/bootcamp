const mongoose = require("mongoose");

// requerimos los schemas
const { Created } = require("../schemas/cars/created.schema");


const userSchema = new mongoose.Schema({
    name: String,
    isCustomer: Boolean,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createAt: Created
});

const User = mongoose.model('user', userSchema);

module.exports = User;