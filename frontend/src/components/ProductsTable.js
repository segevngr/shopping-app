import React, {useState} from "react";
import Product from "./Product"
import "./ProductsTable.css"
import Pagination from "./Pagination";


const ProductTable = (props) => {
    const [page, setPage] = useState(1);

    const renderProducts = (data) => {
        return data.map(function (productData) {
            return (
                <Product
                    data={productData}
                    addToCart={props.addToCart}
                />
            )
        });
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
                <table id="products-table">
                    <tbody>
                    <tr>
                        <td className="product-img"/>
                        <td id="product-h">
                            Item
                        </td>
                        <td id="product-h">
                            Price
                        </td>
                        <td className="product-add-to-cart"/>
                    </tr>
                    {renderProducts(pageData)}
                    </tbody>
                </table>
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