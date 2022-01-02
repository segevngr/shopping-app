import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductTable from "../components/ProductsTable";
import CategoryPicker from "../components/CategoryPicker";

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
        <div>
            <h1>Products</h1>
            <CategoryPicker
                categories = {productsCategories}
                setCategory = {setCategory}
            />
            <ProductTable
                data = {productsJson}
                category = {category}
            />
        </div>
    )

}

export default Products;