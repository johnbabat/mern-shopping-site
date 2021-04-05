const express = require('express');
const router = express.Router();

const { getAllProducts, getProdutsById } = require('../controller/productController')

// GET all products from db
// GET /api/products
// Public
router.get('/', getAllProducts)

// GET a product by id from db
// GET /api/products/:id
// Public
router.get('/:id', getProdutsById)

module.exports = router; 