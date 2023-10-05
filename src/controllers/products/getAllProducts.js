const { Product, Brand } = require("../../db/sequelize");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.findAll({
      include: Brand,
    });

    const allProductsWithBrand = allProducts.map(product => ({
      id: product.id,
      name: product.name,
      image: product.image,
      composition: product.composition,
      price: product.price,
      description: product.description,
      brandName: product.Brand.name,
    }));

    res.json(allProductsWithBrand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllProducts };
