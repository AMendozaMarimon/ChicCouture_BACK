const express = require("express");
const router = require("./src/routes/routes");
const { conn } = require("./src/db/sequelize");
const app = express();
app.use(express.json());
require("dotenv").config();
const { PORT } = process.env;

conn.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`SERVER and BACK ${PORT} en Ejecución`);
  });
});

app.use("/", router);

module.exports = { app };
