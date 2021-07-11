import React from 'react'
import { CartContext } from "./cart-context"
import { CartValueWithLogo } from "./cart"

import { IncrementAndDecrementButtons } from "./cart-buttons"

function CartListing({ currencySign, continueToCheckout }) {
    const cartContext = React.useContext(CartContext);
    const cartStateItems = cartContext?.cartState
    const cartStateItemSetter = cartContext?.setCartState

    function totalPrice(array) {
        let total = 0;
        for (var i = 0; i < array.length; i++) {
            total += array[i]?.price * array[i].quantity;
        }
        return total
    }

    const cartTotalPrice = ({ price, quantity }) => {
        return price * quantity
    }
    return (
        <div className="w-full mx-2">
            <h2>Shopping Cart</h2>
            <div className="mb-2">
                <CartValueWithLogo />
            </div>
            {cartStateItems.length > 0 && <>
                <div>
                    {cartStateItems.map((cartItem, index) =>
                        <div key={index} className="flex justify-between items-center pb-25 mb-2 py-10 margin-bottom cart__item">
                            <div className="w-2/12 af__cart__bg_image" style={{
                                backgroundImage: "url(" + cartItem.image + ")",
                            }}>
                            </div>
                            <div className="w-4/12">
                                <h5>{cartItem?.name}</h5>
                                <p>{cartItem?.description}</p>
                            </div>
                            <div className="w-2/12" >{(`${cartItem?.quantity}`)}</div>
                            <div className="w-4/12">
                                <p>{currencySign}{cartTotalPrice(cartItem)}</p>
                                <IncrementAndDecrementButtons
                                    product={cartItem}
                                    cartStateItems={cartStateItems}
                                    setCartState={cartStateItemSetter}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <hr />
                <div>
                    <h5>Total: {currencySign}{totalPrice(cartStateItems)}</h5>
                    <button onClick={() => continueToCheckout({
                        total_price: totalPrice(cartStateItems),
                        currency_sign: currencySign,
                        cart_items: cartStateItems
                    })} className="cart__proceed_to__checkout_button">Proceed to checkout</button>
                </div>
            </>}

            {cartStateItems.length <= 0 && <div>No item in cart</div>}
        </div>
    )
}


export {
    CartListing
}