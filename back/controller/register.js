const bcrypt = require("bcrypt");
const Usuario = require("../model/user");

const register = async (req, res) => {
  const { nombre, username, contraseña } = req.body;

  Usuario.findOne({ username }).then((usuario) => {
    if (usuario) {
      return res.json({ mensaje: "Ya existe un usuario con ese correo" });
    } else if (!nombre || !username || !contraseña) {
      return res.json({ mensaje: "Falta el nombre / username / contraseña" });
    } else {
      bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
        if (error) res.json({ error });
        else {
          const nuevoUsuario = new Usuario({
            nombre,
            username,
            contraseña: contraseñaHasheada,
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