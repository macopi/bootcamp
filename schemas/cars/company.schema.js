const mongoose = require("mongoose");

exports.Company = {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'company'
}