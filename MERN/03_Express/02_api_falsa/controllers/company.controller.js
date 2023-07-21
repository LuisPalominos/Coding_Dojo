const empresaModel = require('../models/company.models');

module.exports={
    createCompany: (req, res,callback) =>{
        let newEmpresa= new empresaModel();
        callback({ company: newEmpresa });
    }
}