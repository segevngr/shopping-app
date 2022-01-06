import { createContext } from 'react';

export const CartContext = createContext({
    cartMap: {},
    cartCount: {},
    updateCartMap: () => {},
    updateCartCount: () => {},
});
