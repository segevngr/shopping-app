import React from "react";

const Product = (props) => {
    return(
        <tr>
            <td className="product-img">
                <img src={props.data.image}  alt='X' />
            </td>
            <td className="product-title">
                {props.data.title}
            </td>
            <td className="product-price">
                {props.data.price} $
            </td>
            <td className="product-add-to-cart">
                <button onClick={() => props.addToCart(props.data)}>Add to Cart</button>
            </td>
        </tr>
    )
}


export default Product;