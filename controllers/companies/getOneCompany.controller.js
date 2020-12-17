const { getOneCompany } = require("../../services/companies/getOneCompany.service");

exports.getOneCompanyController = async(req, res) => {
    const company = await getOneCompany(req.params.id);
    if (!company) return res.status(404).send('No encontrado :C')
    return res.status(200).send(company);
}