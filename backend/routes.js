const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/get-products', controllers.getProducts);
router.get('/get-categories', controllers.getCategories);

// router.get('/get-cart-items', );
// router.post('/remove-cart-item', );
// router.post('/clear-cart', );

module.exports = router;