const express = require('express');
const router = express.Router();
const {getProducts, getProduct, addProduct, updateProduct, deleteProduct,} = require('../controller/products');

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
