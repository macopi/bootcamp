const mongoose = require("mongoose");
const { Created } = require("../schemas/cars/created.schema");

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 1,
        maxlength: 99
    },
    country: String,
    createdAt: Created
})

const Company = mongoose.model('company', companySchema);

module.exports = Company;