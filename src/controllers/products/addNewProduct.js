const { Product, Brand } = require("../../db/sequelize");

const addNewProduct = async (req, res) => {
  const { name, image, brand, composition, price, description } = req.body;

  try {
    if (!name || !image || !brand || !composition || !price || !description) {
      res
        .status(400)
        .json({ message: "Hace falta pasos para agregas el Producto" });
    }

    //Buscar la marca por su nombre o crea uoa si no existe
    let brandDB = await Brand.findOrCreate({
      where: { name: brand },
    });

    // Crea un nuevo producto asociado a la marca
    const newProduct = await Product.create({
      name,
      image,
      composition,
      price,
      description,
    });

    //Se establece la relación entre Product y Brand
    await newProduct.setBrand(brandDB[0]);

    //Consulta el producto con la marca asociada
    const productWithBrand = await Product.findOne({
      where: {
        id: newProduct.id,
      },
      include: Brand,
    });

    return res
      .status(201)
      .json({ message: "Producto creado con éxito", product: productWithBrand });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addNewProduct };
