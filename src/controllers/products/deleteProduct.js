const { Product } = require("../../db/sequelize");

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.destroy({
      where: {
        id: id
      }
    });

    return res.json({
      message: `El producto con el ID ${id} fue eliminado éxitosamente!`,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { deleteProduct };
