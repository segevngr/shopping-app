import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {CartContext} from "./cart-context";

import Products from './pages/Products';
import Cart from './pages/Cart'
import "./App.css"

function App() {
    const [cartMap, setCartMap] = useState(new Map());
    const [cartCount, setCartCount] = useState(0);

    const updateCart = (map) => {
        localStorage.cartMap = JSON.stringify(Array.from(map.entries()));
        setCartMap(map);
        console.log("updateCart");
    }

    const updateCount = (count) => {
        localStorage.cartCount = count;
        setCartCount(count);
        console.log("updateCount");
    }

    // Loads user cart from local storage upon refresh
    useEffect(() => {
        const cartMap = JSON.parse(localStorage.getItem('cartMap'));
        const cartCount = JSON.parse(localStorage.getItem('cartCount'));
        if (cartMap && cartCount) {
            setCartMap(new Map(cartMap));
            setCartCount(cartCount);
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartMap: cartMap,
                cartCount: cartCount,
                updateCartMap: updateCart,
                updateCartCount: updateCount
            }}>
            <h1> Shopping App</h1>
            <Router>
                <Routes>
                    <Route path="/" element={<Products/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </Router>
        </CartContext.Provider>
    )
}

export default App;