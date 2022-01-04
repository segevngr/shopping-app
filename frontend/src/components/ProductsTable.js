import React, {useState} from "react";
import Product from "./Product"
import "./ProductsTable.css"
import Pagination from "./Pagination";


const ProductTable = (props) => {
    const [page, setPage] = useState(1);

    const renderProducts = (data) => {
        let products = data.map(function (productData) {
            return (
                <Product data={productData}/>
            )
        });

        return (
            <table id="products-table">
                <tbody>
                {products}
                </tbody>
            </table>
        );
    }

    if (props.data && props.category) {
        let filteredData = props.data;
        if (props.category !== "All Categories")
            filteredData = props.data.filter(product => product.category === props.category)
        let pageStart = (page - 1) * 5
        let pageEnd = pageStart + 5
        let pageData = filteredData.slice(pageStart, pageEnd)
        return (
            <div>
                {renderProducts(pageData)}
                <Pagination
                    data={filteredData}
                    page={page}
                    setPage={setPage}
                />
            </div>
        )
    }
    return null;
}


export default ProductTable;