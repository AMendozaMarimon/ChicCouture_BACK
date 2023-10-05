const { DataTypes } = require("sequelize");
//Importo una función que permite definir modelos

module.exports = (sequelize) => {
  //Defino el modelo con sus propiedades
  sequelize.define(
    "Brand",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
