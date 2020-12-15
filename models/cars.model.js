const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
        uppercase: true,
        trim: true,
        minlength: 2,
        maxlength: 99,
        enum: ['BMW', 'AUDI', 'SEAT'] // solo se van a permitir estas compañias
    },
    model: String,
    sold: Boolean,
    price: {
        type: Number,
        required: function() {
            return this.sold
        },
        minlength: 1000
    },
    year: {
        type: Number,
        min: 2000,
        max: 2030
    },
    extras: [String],
    created: {
        type: Date,
        default: Date.now()
    }
})

const Car = mongoose.model('car', carSchema);

module.exports = Car;