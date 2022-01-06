import React, {useContext} from "react";
import {CartContext} from "../cart-context";
import {Link} from "react-router-dom";
import CartTable from "../components/CartTable";

const Cart = () => {
    const cart = useContext(CartContext);

    const removeFromCart = (item) => {
        let newMap = cart.cartMap;
        let itemToRemove = newMap.get(item.id);
        if(itemToRemove.count > 1) {
            itemToRemove.count--;
            newMap.set(item.id, itemToRemove);
        }
        else{
            newMap.delete(item.id)
        }
        cart.updateCartMap(newMap);
        cart.updateCartCount(cart.cartCount - 1);
    }

    const handleCheckOut = () => {
        let totalPrice = calcTotal();
        cart.updateCartMap(new Map());
        cart.updateCartCount(0);
        let dialogText = `Your purchase for ${totalPrice} $ was successful!\n`
        window.alert(dialogText);
    }

    const calcTotal = () => {
        let total = 0;
        cart.cartMap.forEach((value) => {
            total += value.price * value.count;
        })
        return Math.floor(total);
    }

    const renderEmptyCart = () =>{
        return(
            <div>
                <div id="no-items">There are no items in your cart!</div>
                <Link to="/"><button>Click Here to start Shopping</button></Link>
            </div>
        )
    }

    return(
        <div>
            <h2>Cart</h2>
            {cart.cartCount === 0 ? renderEmptyCart() :
                <CartTable
                    cartItems={cart.cartMap}
                    removeFromCart={removeFromCart}
                    handleCheckout={handleCheckOut}
                    calcTotal={calcTotal}
                />
            }
        </div>

    )
}

export default Cart;