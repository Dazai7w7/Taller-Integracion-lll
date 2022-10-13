const { model, Schema, default: mongoose } = require("mongoose");

const UsuarioSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: { type: String, required: true },
  nombre_usuario: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  fecha: {type: Date, default: Date.now}
});

module.exports = model("user", UsuarioSchema);