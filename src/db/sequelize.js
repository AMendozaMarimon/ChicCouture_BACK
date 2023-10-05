const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://postgres:Mendozza002@localhost/cc`,
  { logging: false, native: false }
);

const modelDefiners = [
  require("../models/Product.js"), // Importa tus modelos aquí
  require("../models/Brand.js"),
];

// Inyecta la conexión Sequelize en todos los modelos
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

const { Product, Brand } = sequelize.models;

module.exports = {
  conn: sequelize,
  Product,
};
