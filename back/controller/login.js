// const bcrypt = require("bcrypt");
const Usuario = require("../model/user");

const login = async (req, res) => {
  const {username,repassword} = req.body
    Usuario.findOne({username : username},(err,user)=>{
            if(user){
                if(repassword == user.repassword){
                    res.send({message : "Ingreso exitoso",user})
                }
                else{
                    res.send({message : "Contraseña incorrecta"})
                }
            }
            else{
                res.send({message : "Este usuario no está registrado"})
            }
    })
}

module.exports = login;