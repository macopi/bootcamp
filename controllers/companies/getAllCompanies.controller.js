const { getAllCompanies } = require("../../services/companies/getAllCompanies.service");

exports.getAllCompaniesController = async(req, res, next) => {
    const company = await getAllCompanies();
    if (!company.length) return res.status(404).send('No hay Coches');
    else return res.status(200).send(company);
}