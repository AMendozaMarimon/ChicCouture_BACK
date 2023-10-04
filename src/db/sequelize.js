const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://postgres:Mendozza002@localhost/cc`,
  { logging: false, native: false }
);

const modelDefiners = [
  require("../models/Product.js"), // Importa tus modelos aquí
];

// Inyecta la conexión Sequelize en todos los modelos
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

sequelize.sync({ force: false }).then(() => {
  console.log('Base de Datos ON');
})

module.exports = { conn: sequelize };
