const Company = require("../../models/company.model")

exports.getOneCompany = async(id) => {
    const company = await Company.findById({ _id: id });
    return company;
}