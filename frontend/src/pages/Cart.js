import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import CartTable from "../components/CartTable";
import axios from "axios";

const Cart = () => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/get-cart-items`).then(response => {
            setCartItems(response.data);
        });
    }, []);

    const removeFromCart = (product) => {
        axios.post("http://localhost:5000/remove-from-cart", {
            product: product,
        }).then(response => {
            setCartItems(response.data)
        })

    }

    const handleCheckout = () => {
        axios.post("http://localhost:5000/clear-cart").then(response => {
            let totalPrice = calcTotal();
            let dialogText = `Your purchase for ${totalPrice}$ was successful!\n`
            window.alert(dialogText);
            setCartItems([]);
        })
    }

    const calcTotal = () => {
        let total = 0;
        cartItems.forEach((product) => {
            total += product[1].price * product[1].count;
        })
        return Math.floor(total);
    }

    const renderEmptyCart = () =>{
        return(
            <div id="empty-cart">
                <div id="no-items">There are no items in your cart!</div>
                <Link to="/"><button>Click Here to start Shopping</button></Link>
            </div>
        )
    }

    return(
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? renderEmptyCart() :
                <CartTable
                    cartItems={cartItems}
                    removeFromCart={removeFromCart}
                    handleCheckout={handleCheckout}
                    calcTotal={calcTotal}
                />
            }
        </div>

    )
}

export default Cart;