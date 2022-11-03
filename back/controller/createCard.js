const card = require("../model/card")

const createCard = async (req, res) =>{
    const { game, horario, descripcion } = req.body;

    const nuevaTarjeta = new card({
        game,
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