const { DataTypes, DATE } = require("sequelize");
//Importo una función que permite definir modelos

module.exports = (sequelize) => {
  //Defino el modelo con sus propiedades
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        validate: {
          min: 18,
          max: 120,
        },
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [8, Infinity],
            msg: "La contraseña debe tener 8 o más carácteres!",
          },
        },
      },
      status: {
        type: DataTypes.ENUM("user", "admin"),
        allowNull: false,
        defaultValue: "user",
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "dddddd.png",
      },
      tel: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ban: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
