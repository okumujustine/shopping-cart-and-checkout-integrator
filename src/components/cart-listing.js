import React from 'react'
import { CartContext } from "./cart-context"

import { IncrementAndDecrementButtons } from "./cart-buttons"

function CartListing() {
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

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartStateItems.length > 0 && <>
                <div>
                    <div className="flex justify-between items-center pb-25 py-10 margin-bottom">
                        <div className="w-2/12">
                            <h5>Item</h5>
                        </div>
                        <div className="w-4/12">
                            <h5>Item/Description</h5>
                        </div>
                        <div className="w-2/12">
                            <h5>Quantity</h5>
                        </div>
                        <div className="w-2/12">
                            <h5>Sub Total</h5>
                        </div>
                        <div className="w-2/12">
                            <h5>Action</h5>
                        </div>
                    </div>
                    {cartStateItems.map((cartItem, index) =>
                        <div key={index} className="flex justify-between items-center pb-25 mb-2 py-10 margin-bottom border-1 border-gray-200 cart__item">
                            <div className="w-2/12">
                                image
                            </div>
                            <div className="w-4/12">
                                <h5>{cartItem?.name}</h5>
                                <p>{cartItem?.description}</p>
                            </div>
                            <div className="w-2/12" >{(`${cartItem?.quantity} items`)}</div>
                            <div className="w-2/12">{cartItem?.price * cartItem?.quantity}</div>
                            <div className="w-2/12">
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
                    <h5>Total: ${`${totalPrice(cartStateItems)}.00`}</h5>
                    <button className="cart__proceed_to__checkout_button">Proceed to checkout</button>
                </div>
            </>}

            {cartStateItems.length <= 0 && <div>No item in cart</div>}
        </div>
    )
}


export {
    CartListing
}