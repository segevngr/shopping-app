import React from "react";
import "./ProductsTable.css"
import CartItem from "./CartItem";
import './CartTable.css';
import {Link} from "react-router-dom";

const CartTable = (props) => {

    const renderCartItems = () => {
        return Array.from(props.cartItems.keys()).map((key) => {
            let value = props.cartItems.get(key);
            return (<CartItem
                data={value}
                removeFromCart={props.removeFromCart}
            />)
        });
    }

    if (props.cartItems) {
        return (
            <div id="cart-table">
                <table>
                    <tbody>
                    <tr>
                        <td id="cart-image-header"/>
                        <td id="cart-item-header">
                            Item
                        </td>
                        <td id="cart-quant-header">
                            Quantity
                        </td>
                        <td id="cart-price-header">
                            Price
                        </td>
                        <td id="cart-remove-header">
                        </td>
                    </tr>
                    {renderCartItems()}
                    </tbody>
                </table>
                <div id="total-price">
                    Total: {props.calcTotal()} $
                </div>
                <div id="cart-btns">
                    <Link to="/">
                        <button id="cart-btn">Back</button>
                    </Link>
                    <button id="cart-btn" onClick={() => props.handleCheckout()}>Checkout</button>
                </div>
            </div>
        )
    }
    return null;
}


export default CartTable;