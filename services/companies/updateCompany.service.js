const Company = require("../../models/company.model");

exports.updateCompanyService = async(id, companyB) => {

    const company = await Company.findByIdAndUpdate(id, {
        name: companyB.name,
        isCustomer: companyB.isCustomer,
        email: companyB.email
    }, {
        new: true
    });

    return company;

}