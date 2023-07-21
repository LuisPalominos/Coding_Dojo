const usuarioModel=require('../models/user.model');

module.exports={
    createUser:(req,res,callback)=>{
        let newUsuario= new usuarioModel();
        callback({ user: newUsuario });
    }
}