const { User } = require("../../db/sequelize");
const bcrypt = require("bcrypt");

const addNewUser = async (req, res) => {
  // Obtengo los datos del usuario
  const { name, email, password } = req.body;

  // Si todos los campos no llegan enviará el mensaje auto.
  if (!(name && email && password)) {
    return res
      .status(401)
      .json({ error: "Por favor, completa todos los campos obligatorios." });
  }

  try {
    // Verifica si el email ya está registrado en la base de datos
    const existingUser = await User.findOne({
      where: { email },
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "El usuario ya existe en la base de datos!" });
    }

    // Haz el hash de la contraseña antes de guardarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creo el usuario en la base de datos
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res
      .status(201)
      .json({ message: `Este es el nuevo usuario ${newUser.name}` });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { addNewUser };
