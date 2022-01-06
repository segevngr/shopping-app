import React, {useEffect, useState, useContext} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import ProductTable from "../components/ProductsTable";
import CategoryPicker from "../components/CategoryPicker";
import './Products.css';
import {CartContext} from "../cart-context";

const Products = () => {
    const cart = useContext(CartContext);

    const [productsJson, setProductsJson] = useState(null);
    const [productsCategories, setProductsCategories] = useState([]);
    const [category, setCategory] = useState("All Categories");

    useEffect(() => {
        axios.get(`http://localhost:5000/get-products`).then(response => {
            setProductsJson(response.data);
        });
        axios.get(`http://localhost:5000/get-categories`).then(response => {
            setProductsCategories(response.data);
        });
    }, []);

    const addToCart = (product) => {
        let newMap = cart.cartMap;
        if (newMap.has(product.id)) {
            let newProd = newMap.get(product.id);
            newProd.count++;
            newMap.set(product.id, newProd);
        } else {
            product.count = 1;
            newMap.set(product.id, product);
        }
        cart.updateCartMap(newMap);
        cart.updateCartCount(cart.cartCount + 1);
    }

    return (
        <div id="products-page">
            <h2>Products</h2>
            <table id="table-header">
                <tbody>
                <tr>
                    <td id="category-container">
                        <CategoryPicker
                            categories={productsCategories}
                            setCategory={setCategory}
                        />
                    </td>
                    <td id="cart-link">
                        {cart.cartCount>0 ? <span id="cart-count"> {cart.cartCount}</span> : null}
                        <Link to="/cart">
                            <img id="cart-icon" alt = "" src = "https://www.pinclipart.com/picdir/big/403-4035278_png-file-svg-shopping-cart-icon-png-clipart.png"/>
                        </Link>
                    </td>
                </tr>
                </tbody>
            </table>
            <ProductTable
                data={productsJson}
                category={category}
                addToCart={addToCart}
            />
        </div>
    )

}

export default Products;