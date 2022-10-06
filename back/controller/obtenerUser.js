const Usuario = require("../model/user");

const getUserById = async (req, res) => {
  const { id } = req.user;

  if (id.length === 24) {
    Usuario.findById(id).then((usuario) => {
      if (!usuario) {
        return res.json({
          mensaje: "No se encontro ningun usuario con ese Id",
        });
      } else {
        const { _id, contraseña, __v, ...resto } = usuario._doc;
        res.json(resto);
      }
    });
  } else {
    res.json({ mensaje: "La contraseña es incorrecta!" });
  }
};

module.exports = getUserById;