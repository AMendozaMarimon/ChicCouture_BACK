const { Sequelize } = require('sequelize');
require('dotenv').config();
const { USER, PASSWORD, HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, USER, PASSWORD, {
  host: HOST,
  dialect: 'postgres',
});

const modelDefiners = [
    require('../models/Product.js'), // Importa tus modelos aquí
  ];
  
  // Inyecta la conexión Sequelize en todos los modelos
  for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
  }

module.exports = sequelize;
