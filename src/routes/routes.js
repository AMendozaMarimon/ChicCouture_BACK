const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../controllers/products/getAllProducts');
const { addNewProduct } = require('../controllers/products/addNewProduct');
const { deleteProduct } = require('../controllers/products/deleteProduct');
const { deleteBrand } = require('../controllers/brands/deleteBrands');
const { getOneProduct } = require('../controllers/products/getOneProduct');

// Rutas de los Productos
router.get('/products', getAllProducts); //Solicita todos los productos
router.get('/products/:id', getOneProduct) //Solicita un producto en específico
router.post('/products', addNewProduct); //Crea un nuevo producto
router.delete('/products/:id', deleteProduct); //Elimina un producto

// Rutas de Marcas
router.delete('/brand/:id', deleteBrand);

module.exports = router;
