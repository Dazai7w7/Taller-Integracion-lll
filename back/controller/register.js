const bcrypt = require("bcrypt");
const Usuario = require("../model/user");

const register = async (req, res) => {
  const { name, username, email, password, repassword } = req.body;

  Usuario.findOne({ email }).then((usuario) => {
    if (usuario) {
      return res.json({ mensaje: "Ya existe un usuario con ese correo" });
    } else {
      bcrypt.hash(password, 10, (error, contraseñaHasheada) => {
        if (error) res.json({ error });
        else {  
          const nuevoUsuario = new Usuario({
            name,
            username,
            email,
            password: contraseñaHasheada,
            repassword,
          });

          nuevoUsuario
            .save()
            .then((usuario) => {
              res.json({ mensaje: "Usuario creado correctamente", usuario });
            })
            .catch((error) => console.error(error));
        }
      });
    }
  });
};

module.exports = register;