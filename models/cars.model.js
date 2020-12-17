const mongoose = require('mongoose');

// imports de schema
// const  = require('../schemas/')
const { Company } = require('../schemas/cars/company.schema');
const { Created } = require('../schemas/cars/created.schema');
const { Price } = require('../schemas/cars/price.schema');
const { Year } = require('../schemas/cars/year.schema');


const carSchema = new mongoose.Schema({
    company: Company,
    model: String,
    sold: Boolean,
    price: Price,
    year: Year,
    extras: [String],
    createdAt: Created
})

const Car = mongoose.model('car', carSchema);

module.exports = Car;