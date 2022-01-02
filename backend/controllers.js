
const getProducts = async (req, res) => {
    const fs = require('fs');
    let rawdata = fs.readFileSync('./products.json');
    let products = JSON.parse(rawdata);
    res.json(products);
}

exports.getProducts = getProducts;