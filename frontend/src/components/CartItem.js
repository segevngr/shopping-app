import React from "react";

const CartItem = (props) => {
    return(
        <tr>
            <td id="cart-img">
                <img src={props.data.image}  alt='X' />
            </td>
            <td id="cart-title">
                {props.data.title}
            </td>
            <td id="cart-quant">
                {props.data.count}
            </td>
            <td id="cart-price">
                {props.data.price * props.data.count} $
            </td>
            <td id="remove-from-to-cart">
                <button onClick={() => props.removeFromCart(props.data)}> Remove </button>
            </td>
        </tr>
    )
}


export default CartItem;