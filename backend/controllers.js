const fs = require("fs");

const getProducts = async (req, res) => {
    const fs = require('fs');
    let rawdata = fs.readFileSync('./products.json');
    let products = JSON.parse(rawdata);
    res.json(products);
}

const getCategories = async (req, res) => {
    const fs = require('fs');
    let rawdata = fs.readFileSync('./products.json');
    let products = JSON.parse(rawdata);

    let categories = new Map();
    for(let product of products)
        categories[product.category] = 0;

    res.json(Object.keys(categories));
}

exports.getProducts = getProducts;
exports.getCategories = getCategories;