const usuarioController = require('../controllers/user.controller');
const empresaController= require('../controllers/company.controller');


const empresaUsuario = {
    createEmpresaUsuario: (req, res) => {
        empresaController.createCompany(req, res, (companyData) => {
            usuarioController.createUser(req, res, (userData) => {
                res.json({ company: companyData.company, user: userData.user });
            });
        });
    }
};
module.exports=(app)=>{
    app.post("/api/users/companies",empresaUsuario.createEmpresaUsuario);
}