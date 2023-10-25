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
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [8, 16],
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
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:
          "https://lh3.googleusercontent.com/pw/ADCreHdG7Lzj0kUN8zdx4uK3oQXgKgILlpuLw4nvve525N6WHQ9ZIsCPtjros5DxpuSEkuuJE4FwhLcJZ5kuXhnQdqzhCOblf5GFrHM0fcbH95xhrXayf5OKnSHhsI2RLHcpdu2c-v6HR9auxy7ZNGAbQSPcQ0xj4C3YOISeZqCJ0j_VTo6nMj63Vceuqj3risq70TW_1Gn8Fk-c0SlJUDr2w4dPtyGyQ4UG4CG4RteNv0Wdn72EvhmbZZT2rwy-EBQsMldpa4Su4o2nk3f6thw-L3-jVEISF8dCqCYu-M0-HObTR62CQJ9G18ZJtlfbi237oAEkTZwiuH4Dk9TkszZqAJbl1_-iJSWLrCee40Gj0UjhYLIWcl12lJVVQcstOZpMNROIvdjBWKPQiKYvR8dDEd2fMe7VtkEVFBavuIwNrSHzGrh_bEyYlodPSP8beGKobttQCLvYn99XlDlxy56xSyBXZSAON0Kjhj2lUkfbfg9tyiV3rsnLRVZYZVqJHuu5usbqfn0_qR_ttBRMmH9if7sezIEszvysvr3HlVYZS0eyEROinJvCY3xrZK1N9hvhxWH-5JuYEDs7gQYhMwtLhPGsm81ejCqq2y_WB3x5OFXmDoorofL6sOpHjj4_sv8Dr6rvIsCXKmVXHPAz2PtUih2e6vvH-tbJF-u2IfNxQLWEfu5UgtuFfxgREyYKyJU0frDaH7NJzzBK38-kFmR4g7HZukowxWMsphm5ABa3bYZuJ0UA-cwHDx4JJxWFbF7gkH-LCX2WTJsDz0BLRlzE-r2-fHAAh9TCij8XDVdjGVexuyYe_BLLV95ZEdABY6inyEmOM-Am3QuF2hko7bTOgdbcYZDu3QUjJG6dN5DD2jF3Ost0dtWAeBRgnmIdnYeLU-xs3AxY04eJ4r7q-gUmDqxyyx4=w1216-h913-s-no-gm?authuser=0",
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
