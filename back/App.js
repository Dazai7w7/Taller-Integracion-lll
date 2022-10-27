const express = require("express");
const cors = require("cors");
const db = require("./database/db");

const controller = require("./controller");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/user/:id", controller.getUserById);
app.post("/register", controller.register);
app.post("/login", controller.login);
app.post("/createcard", controller.createCard);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`SERVER FUNCIONANDO EN EL PUERTO ${PORT}`);;
  db();
});

module.exports = app;