const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const mongoose = require('mongoose');
// colocamos la url de conexión local y el nombre de la base de datos
mongoose.connect('mongodb://localhost:27017/base_de_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
});
  
app.listen(PORT, () => {
   console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

