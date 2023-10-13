const { Product, Brand } = require("../../db/sequelize");

const getOneProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const productSelec = await Product.findOne({
      where: {
        id: id,
      },
      include: Brand,
    });

    const detailProduct = {
      id: productSelec.id,
      name: productSelec.name,
      image: productSelec.image,
      composition: productSelec.composition,
      price: productSelec.price,
      description: productSelec.description,
      brandName: productSelec.Brand.name,
    };

    res.json(detailProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getOneProduct };
