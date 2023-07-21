const empresaController= require('../controllers/company.controller');

module.exports = (app) => {
    app.post("/api/companies/new", (req, res) => {
        empresaController.createCompany(req, res, (companyData) => {
            // Send the response with the company data received from the callback
            res.json(companyData);
        });
    });
};