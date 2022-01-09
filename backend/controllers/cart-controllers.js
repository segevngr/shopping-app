let CART = new Map();
let CART_COUNT = 0;

const getCart = async (req, res) => {
    res.send(Array.from(CART));
}

const getCartCount = async (req, res) => {
    res.json(CART_COUNT);
}

const addToCart = async (req, res) => {
    const product = req.body.product;
    if (CART.has(product.id)) {
        CART.get(product.id).count += 1
    } else {
        product.count = 1;
        CART.set(product.id, product);
    }
    CART_COUNT++;
    res.send(Array.from(CART));
}

const removeFromCart = async (req, res) => {
    const product = req.body.product;
    if (CART.get(product.id).count === 1) {
        CART.delete(product.id);
    } else {
        CART.get(product.id).count -= 1;
    }
    CART_COUNT--;
    res.send(Array.from(CART));
}

const clearCart = async (req, res) => {
    CART.clear();
    CART_COUNT = 0;
    res.send(CART);
}


exports.getCart = getCart;
exports.getCartCount = getCartCount;
exports.addToCart = addToCart;
exports.removeFromCart = removeFromCart;
exports.clearCart = clearCart;