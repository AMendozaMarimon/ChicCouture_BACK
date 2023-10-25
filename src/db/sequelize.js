const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://postgres:Mendozza002@localhost/cc`,
  { logging: false, native: false }
);

const modelDefiners = [
  require("../models/Product.js"), // Importa tus modelos aquí
  require("../models/Brand.js"),
  require("../models/User.js"),
];

// Inyecta la conexión Sequelize en todos los modelos
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// Traigo todos los modelos
const { Product, Brand, User } = sequelize.models;

// Hago relaciones con los modelos

//Brand tiene muchos Product
Brand.hasMany(Product, {foreignKey: 'brandId', });
Product.belongsTo(Brand, {foreignKey: 'brandId', })

module.exports = {
  conn: sequelize,
  Product,
  Brand,
  User,
};
