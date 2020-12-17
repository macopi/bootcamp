const Company = require("../../models/company.model");

exports.deleteCompanyService = async(id) => {
    const company = await Company.findByIdAndDelete(id);
    return company;
}