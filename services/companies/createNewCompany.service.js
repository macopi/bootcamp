const Company = require("../../models/company.model");

exports.createNewCompany = async(companyB) => {
    const company = new Company({
        name: companyB.name,
        country: companyB.country
    });

    const result = await company.save();
    return result;
}