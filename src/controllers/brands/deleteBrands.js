const { Brand } = require("../../db/sequelize");

const deleteBrand = async (req, res) => {
  const { id } = req.params;

  try {
    await Brand.destroy({
      where: {
        id: id,
      },
    });
    return res.json({
      message: `La Marca con el ID ${id} fue eliminada con éxito!`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { deleteBrand };
