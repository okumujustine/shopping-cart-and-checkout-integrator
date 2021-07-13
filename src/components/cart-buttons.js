import React from 'react'
import { CartContext } from "./cart-context"

import { incrementArrayQuantity, decrementArrayQuantity, isProductInArray, getQuantityFromArray } from "./helpers/action"

function IncrementAndDecrementButtons({
    product,
    cartStateItems,
    setCartState,
    incrementBtnClass,
    decrementBtnClass,
    incrementBtnStyle,
    decrementBtnStyle,
}) {

    const decrementItemQuantity = (itemsInCart, newProduct) => {
        let cartItems = itemsInCart?.slice();

        if (newProduct.quantity === 1) {
            cartItems = cartItems?.filter((a) => a.id !== newProduct.id);
            cartItems.length <= 0 ? setCartState([]) : setCartState([...cartItems])
            return;
        }

        const found = isProductInArray(cartItems, newProduct)

        if (!found) {
            console.log("item does not exist in cart , reload and add to cart.. sorry")
        } else {
            decrementArrayQuantity(cartItems, newProduct)
        }
        setCartState([...cartItems])

    }

    const incrementItemQuantity = (itemsInCart, newProduct) => {
        const cartItems = itemsInCart?.slice();

        const found = isProductInArray(cartItems, newProduct)

        if (!found) {
            cartItems.push(newProduct)
            return setCartState([...cartItems])
        }

        incrementArrayQuantity(cartItems, newProduct)

        return setCartState([...cartItems])
    }

    return (
        <div className="cart__in__cart__button_main w-full">
            <button
                className={`cart__in__cart__button cart__in__cart__button_increment ${incrementBtnClass}`}
                style={{ ...incrementBtnStyle }}
                onClick={() => incrementItemQuantity(cartStateItems, product)}
            >
                <span>+</span>
            </button>
            <span>{getQuantityFromArray(cartStateItems, product).quantity}</span>
            <button
                className={`cart__in__cart__button cart__in__cart__button_decrement ${decrementBtnClass}`}
                style={{ ...decrementBtnStyle }}
                onClick={() => decrementItemQuantity(cartStateItems, product)}
            >
                <span>-</span>
            </button>
        </div>
    )
}


const AddToCartButton = ({ product, cartStateItems, setCartState, addToCartBtnClass, addToCartBtnStyle }) => {
    const cartContext = React.useContext(CartContext);

    const addToCart = () => {

        if (cartContext?.cartShow) {
            cartContext?.setCartShowWithin(!cartContext?.cartShowWithin)
        }

        const cartItems = cartStateItems?.slice();

        const found = isProductInArray(cartItems, product)

        if (!found) {
            cartItems.push(product)
        } else {
            incrementArrayQuantity(cartItems, product)
        }
        setCartState([...cartItems])
    }

    return (
        <button
            className={`cart__add__to__button ${addToCartBtnClass}`}
            onClick={addToCart}
            style={{ ...addToCartBtnStyle }}
        >
            <span>Add to Cart</span>
        </button>
    )
}

export {
    IncrementAndDecrementButtons,
    AddToCartButton
}