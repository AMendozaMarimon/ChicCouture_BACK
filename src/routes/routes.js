const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../controllers/products/getAllProducts');
const { addNewProduct } = require('../controllers/products/addNewProduct');
const { deleteProduct } = require('../controllers/products/deleteProduct');
const { deleteBrand } = require('../controllers/brands/deleteBrands');
const { getOneProduct } = require('../controllers/products/getOneProduct');
const { addNewUser } = require('../controllers/users/newUser');
// const { getFiltersProduct } = require('../controllers/filters/filtersProducts');

// Rutas de los Productos
router.get('/products', getAllProducts); //Solicita todos los productos
router.get('/products/:id', getOneProduct) //Solicita un producto en específico
router.post('/products', addNewProduct); //Crea un nuevo producto
router.delete('/products/:id', deleteProduct); //Elimina un producto

// Rutas de Marcas
router.delete('/brand/:id', deleteBrand);

// Rutas de los Usuarios
router.post("/user", addNewUser);

// Rutas de los Filtros
// router.get('/products/search', getFiltersProduct);

module.exports = router;
