import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import ProductTable from "../components/ProductsTable";
import CategoryPicker from "../components/CategoryPicker";
import './Products.css';

const Products = () => {

    const [productsJson, setProductsJson] = useState(null);
    const [productsCategories, setProductsCategories] = useState([]);
    const [category, setCategory] = useState("All Categories");
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:5000/get-products`).then(response => {
            setProductsJson(response.data);
        });
        axios.get(`http://localhost:5000/get-categories`).then(response => {
            setProductsCategories(response.data);
        });
        axios.get(`http://localhost:5000/get-cart-count`).then(response => {
            setCartCount(response.data);
        });
    }, []);

    const addToCart = (product) => {
        axios.post("http://localhost:5000/add-to-cart", {
            product: product,
        }).then(response => {
            setCartCount(cartCount+1);
        })
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
                        {cartCount > 0 ? <span id="cart-count">{cartCount}</span> : null}
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