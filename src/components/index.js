import React from "react";

import { CartButton, CartValueWithLogo } from "./cart"
import { CartContext, cartReducer } from "./cart-context"
import { CartListing } from "./cart-listing"


function CartWrapper({ children }) {
    const [cartState, setCartState] = React.useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cartState, setCartState }}>
            {children}
        </CartContext.Provider>
    )
}
export {
    CartButton,
    CartValueWithLogo,
    CartWrapper,
    CartListing
}