// const { Product } = require("../../db/sequelize");
// const { Op } = require("sequelize");

// const createILikeCondition = (field, value) => ({
//   [field]: {
//     [Op.iLike]: `%${value}%`,
//   },
// });

// const filtersProducts = async (name, gender, brand, type) => {
//   try {
//     const condition = {};

//     if (name) {
//       condition[Op.or] = [
//         createILikeCondition("name", name),
//         createILikeCondition("brand", name),
//       ];
//     }

//     if (gender) {
//       condition.gender = createILikeCondition("gender", gender);
//     }

//     if (brand) {
//       condition.brand = createILikeCondition("brand", brand);
//     }

//     if (type) {
//       condition.type = createILikeCondition("type", type);
//     }

//     const filteredProd = await Product.findAll({ where: condition });
//     return filteredProd;
//   } catch (error) {
//     console.error(error);
//     throw error; // Re-lanzar el error para que pueda ser manejado en la capa superior
//   }
// };

// const getFiltersProduct = async (req, res) => {
//   const { name, gender, brand, type } = req.query;

//   try {
//     const newFilter = await filtersProducts(name, gender, brand, type);
//     return res.status(200).json(newFilter);
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// };

// module.exports = { getFiltersProduct, filtersProducts };
