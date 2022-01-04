import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductTable from "../components/ProductsTable";
import CategoryPicker from "../components/CategoryPicker";
import './Products.css';

const Products = () => {

    const [productsJson, setProductsJson] = useState(null);
    const [productsCategories, setProductsCategories] = useState([]);
    const [category, setCategory] = useState("All Categories");

    useEffect(() => {
        axios.get(`http://localhost:5000/get-products`).then(response => {
            setProductsJson(response.data);
        });
        axios.get(`http://localhost:5000/get-categories`).then(response => {
            console.log(response.data)
            setProductsCategories(response.data);
        });
    }, []);

    return(
        <div id="products-page">
            <h2>Products</h2>
            <table id="table-header">
                <thead>
                    <td id="category-container">
                    <CategoryPicker
                        categories = {productsCategories}
                        setCategory = {setCategory}
                    />
                    </td>
                    <td id="cart-link"> Cart </td>
                </thead>
            </table>
            <ProductTable
                data = {productsJson}
                category = {category}
            />
        </div>
    )

}

export default Products;