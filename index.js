const express = require("express");
const app = express();
require("dotenv").config();
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("¡Bienvenido a tu servidor backend!");
});

module.exports = { app };
