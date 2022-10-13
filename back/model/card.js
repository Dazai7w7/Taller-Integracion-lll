const { model, Schema, default: mongoose } = require("mongoose");

const CardSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre_juego: String,
    ranked_o_casual: Boolean,
    horario: Date,
    descripcion: String,
    fecha_creacion: {type: Date, default: Date.now},
    autor: { type: mongoose.Schema.Types.ObjectId,
            ref: 'user'}
});

module.exports = model("card", CardSchema);