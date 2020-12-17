const { deleteCompanyService } = require("../../services/companies/deleteCompany.service");

exports.deleteCompanyController = async(req, res) => {
    const company = await deleteCompanyService(req.params.id)
    if (!company) {
        return res.status(404).send('coche no encontrado');
    } else {
        return res.status(200).send('Coche Borrado');
    }
}