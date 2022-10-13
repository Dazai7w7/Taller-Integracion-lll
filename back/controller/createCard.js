const card = require("../model/card")

const createCard = async (req, res) =>{
    const { nombre_juego, ranked_o_casual, horario, descripcion } = req.body;

    const nuevaTarjeta = new card({
        nombre_juego,
        ranked_o_casual,
        horario,
        descripcion
    });

    nuevaTarjeta
        .save()
        .then((tarjeta) => {
            res.json({mensaje: "Tarjeta agregada correctamente", tarjeta});
        })
        .catch((error) => console.log(error));
};



module.exports = createCard