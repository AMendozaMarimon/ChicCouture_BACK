const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../controllers/products/getAllProducts');
const { addNewProduct } = require('../controllers/products/addNewProduct');
const { deleteProduct } = require('../controllers/products/deleteProduct');

// Rutas de los Productos
router.get('/products', getAllProducts);
router.post('/products', addNewProduct);
router.delete('/products/:id', deleteProduct);


module.exports = router;
