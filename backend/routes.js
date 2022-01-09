const express = require('express');
const products_controllers = require('./controllers/products-controllers');
const cart_controllers = require('./controllers/cart-controllers');


const router = express.Router();

router.get('/get-products', products_controllers.getProducts);
router.get('/get-categories', products_controllers.getCategories);

router.get('/get-cart-items', cart_controllers.getCart);
router.get('/get-cart-count', cart_controllers.getCartCount);

router.post('/add-to-cart', cart_controllers.addToCart);
router.post('/remove-from-cart', cart_controllers.removeFromCart);
router.post('/clear-cart', cart_controllers.clearCart);


module.exports = router;