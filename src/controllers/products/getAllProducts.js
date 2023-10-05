const { Product } = require("../../db/sequelize");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllProducts };
