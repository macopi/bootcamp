const Company = require("../../models/company.model");

exports.getAllCompanies = async() => {
    const companies = await Company.find()
    return companies;
}