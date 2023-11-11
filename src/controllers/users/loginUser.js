const { User } = require("../../db/sequelize");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  // Obtengo los datos del usuario
  const { email, password } = req.body;
  try {
    // Verifica si todos los campos llegan, si no se enviara el mensaje auto.
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Por favor, completa todos los campos obligatorios." });
    }

    // Busco el usuario en la base de datos
    const user = await User.findOne({
      where: { email },
    });

    // Verifica si el usuario existe
    if (!user) {
      return res
        .status(404)
        .json({ error: "El usuario no existe en la base de datos." });
    }

    // Verifica si la contraseña es correcta
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ error: "Contraseña incorrecta." });
    }
    return res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = loginUser;
