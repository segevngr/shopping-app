import React from "react";
import Product from "./Product"
import "./ProductsTable.css"


const renderProducts = (data) => {
        let products = data.map(function (productData) {
            return (
                <Product
                    data={productData}
                />
            )
        });

        return (
            <table>
                <tbody>
                {products}
                </tbody>
            </table>
        );
}

const ProductTable = (props) => {
    if (props.data && props.category) {
        let filteredData = props.data;
        if(props.category !== "All Categories")
            filteredData = props.data.filter(product => product.category === props.category)
        return (
            <div>
                {renderProducts(filteredData)}
            </div>
        )
    }
    return null;
}


export default ProductTable;