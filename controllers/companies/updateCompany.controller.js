const { updateCompanyService } = require("../../services/companies/updateCompany.service")

exports.updateCompanyController = async(req, res, next) => {
    const company = await updateCompanyService(req.params.id, req.body);
    if (!company) return res.status(404).send('No encontrado');
    else return res.status(200).send(company);
}