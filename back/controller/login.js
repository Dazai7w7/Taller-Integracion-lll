const bcrypt = require("bcrypt");
const Usuario = require("../model/user");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, contraseña } = req.body;

  Usuario.findOne({ username }).then((usuario) => {
    if (!usuario) {
      return res.json({ mensaje: "Usuario no encontrado" });
    }

    bcrypt.compare(contraseña, usuario.contraseña).then((esCorrecta) => {
      if (esCorrecta) {
        const { id, nombre } = usuario;

        const data = {
          id,
          nombre,
        };

        const token = jwt.sign(data, "secreto", {
          expiresIn: 86400 /* Corresponde a 24 horas en segundos */,
        });

        res.json({
          mensaje: "Usuario logeado correctamente",
          usuario: {
            id,
            nombre,
            token,
          },
        });
      } else {
        return res.json({ mensaje: "Contraseña incorrecta" });
      }
    });
  });
};

module.exports = login;