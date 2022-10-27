const { model, Schema, default: mongoose } = require("mongoose");

const UsuarioSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name : String,
  username : String,
  email : {
    type: String,
    required :true,
    unique : true,
  },
  password : String,
  repassword : String
});

module.exports = model("user", UsuarioSchema);
