const { Product } = require("../../db/sequelize");

const addNewProduct = async (req, res) => {
  const { name, image, brand, composition, price, description } = req.body;

  try {
    if (!name || !image || !brand || !composition || !price || !description) {
      res
        .status(400)
        .json({ message: "Hace falta pasos para agregas el Producto" });
    }

    const newProduct = await Product.create({
      name,
      image,
      brand,
      composition,
      price,
      description,
    });

    return res
      .status(201)
      .json({ message: "Producto creado con éxito", product: newProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addNewProduct };
