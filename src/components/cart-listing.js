import React from 'react'
import { CartContext } from "./cart-context"
import { TotalItemsInCart } from "./cart"

import { IncrementAndDecrementButtons } from "./cart-buttons"

function CartListing({ currencySign, continueToCheckout, isCartLogo, newLogo, isDescription = true, description, cartDetailsBtnClass, cartDetailsBtnStyle }) {
    const cartContext = React.useContext(CartContext);
    const cartStateItems = cartContext?.cartState
    const cartStateItemSetter = cartContext?.setCartState

    const incrementBtnClass = cartDetailsBtnClass?.increment
    const decrementBtnClass = cartDetailsBtnClass?.decrement

    const incrementBtnStyle = cartDetailsBtnStyle?.increment
    const decrementBtnStyle = cartDetailsBtnStyle?.decrement

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

    const removeFromCart = (item) => {

        for (var n = 0; n < cartStateItems.length; n++) {
            if (cartStateItems[n].id === item.id) {
                cartStateItems.splice(n, 1);
                console.log(cartStateItems)
                cartStateItemSetter(cartStateItems)
                break;
            }
        }
    }

    return (
        <div className="w-full mx-2">
            <h2>Shopping Cart</h2>
            <div className="mb-2">
                <TotalItemsInCart isCartLogo={isCartLogo} newLogo={newLogo} isDescription={isDescription} description={description} />
            </div>
            {cartStateItems.length > 0 && <>
                <div>
                    {cartStateItems.map((cartItem, index) =>
                        <div key={index} className="flex justify-between items-center pb-25 mb-2 py-10 margin-bottom cart__item">
                            <div className="w-2/12 af__cart__bg_image" style={{
                                backgroundImage: "url(" + cartItem.image + ")",
                            }}>
                            </div>
                            <div className="w-6/12">
                                <h5 className="af__hide_text_1line">{cartItem?.name}</h5>
                                <p className="af__hide_text_2lines">{cartItem?.description}</p>
                                <IncrementAndDecrementButtons
                                    incrementBtnStyle={incrementBtnStyle}
                                    decrementBtnStyle={decrementBtnStyle}
                                    incrementBtnClass={incrementBtnClass}
                                    decrementBtnClass={decrementBtnClass}
                                    product={cartItem}
                                    cartStateItems={cartStateItems}
                                    setCartState={cartStateItemSetter}
                                />
                            </div>
                            <div className="w-3/12 flex flex-col items-center" >
                                {(`${cartItem?.quantity}`)}
                                <p>{currencySign}{cartTotalPrice(cartItem)}</p>
                            </div>
                            <div className="w-1/12 flex flex-col">
                                <div>
                                    <svg onClick={() => removeFromCart(cartItem)} xmlns="http://www.w3.org/2000/svg" className="af__delete_icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
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