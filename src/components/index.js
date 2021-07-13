import React from "react";

import { CartButton, TotalItemsInCart } from "./cart"
import { CartContext, cartReducer } from "./cart-context"
import { CartListing } from "./cart-listing"




function CartWrapper({ children, cartShow = true, currencySign, continueToCheckout }) {
    const [cartState, setCartState] = React.useReducer(cartReducer, []);
    const [cartShowWithin, setCartShowWithin] = React.useState(false);
    const [currencySignInternal, setCurrencySignInternal] = React.useState("");

    const closeCart = () => {
        setCartShowWithin(false);
    }

    React.useEffect(() => {
        if (currencySign) {
            setCurrencySignInternal(currencySign)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    function goToCheckout() {
        console.log("make sure continueToCheckout prop is passed")
    }

    return (
        <CartContext.Provider value={{ cartState, setCartState, cartShow, cartShowWithin, setCartShowWithin, closeCart, currencySignInternal, goToCheckout }}>
            {cartShowWithin && cartShowWithin ? <CartListing currencySign={currencySignInternal} continueToCheckout={continueToCheckout} /> : null}
            {children}
        </CartContext.Provider>
    )
}

export {
    CartButton,
    TotalItemsInCart,
    CartWrapper,
    CartListing
}