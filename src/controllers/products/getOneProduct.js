const { Product, Brand } = require("../../db/sequelize");

const getOneProduct = async (req, res) => {
  // Obtengo el id del producto
  const { id } = req.params;

  try {
    // Busco el producto mediante el id y obtengo la marca
    const productSelec = await Product.findOne({
      where: {
        id: id,
      },
      include: Brand,
    });

    // Obtengo los datos del producto
    const detailProduct = {
      id: productSelec.id,
      name: productSelec.name,
      image: productSelec.image,
      composition: productSelec.composition,
      price: productSelec.price,
      description: productSelec.description,
      brandName: productSelec.Brand.name,
    };

    // Envio el producto
    res.json(detailProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getOneProduct };
