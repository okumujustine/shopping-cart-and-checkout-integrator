import React, { useContext } from 'react'
import { CartContext } from "./cart-context"
import { Alert } from "./alerts"

import { IncrementAndDecrementButtons, AddToCartButton } from "./cart-buttons"
import "./styles/custom.css"

function CartButton({
    product,
    buttonClass,
    buttonStyle,
    isIncrementAndDecrementBtn = true
}) {

    const cartContext = useContext(CartContext);

    const addToCartBtnClass = buttonClass?.addToCart
    const incrementBtnClass = buttonClass?.increment
    const decrementBtnClass = buttonClass?.decrement

    const addToCartBtnStyle = buttonStyle?.addToCart
    const incrementBtnStyle = buttonStyle?.increment
    const decrementBtnStyle = buttonStyle?.decrement


    const cartStateItems = cartContext?.cartState
    const cartStateItemSetter = cartContext?.setCartState

    if (!cartStateItems || !cartStateItemSetter) {
        return (
            <Alert
                alertList={[{
                    id: 1,
                    title: "CartWrapper",
                    description: "Application must be wrapped in a CartWrapper container!"
                }
                ]}
                position="top-right"
                type="danger"
                dismissTime={100000}
            />

        )
    }




    return (
        <div>

            {!cartStateItems.some(el => el.id === product.id) ?
                <React.Fragment>
                    <AddToCartButton
                        addToCartBtnClass={addToCartBtnClass}
                        addToCartBtnStyle={addToCartBtnStyle}
                        product={product}
                        cartStateItems={cartStateItems}
                        setCartState={cartStateItemSetter}
                    />
                </React.Fragment>

                :
                <React.Fragment>
                    {!isIncrementAndDecrementBtn ?
                        <AddToCartButton
                            addToCartBtnClass={addToCartBtnClass}
                            addToCartBtnStyle={addToCartBtnStyle}
                            product={product}
                            cartStateItems={cartStateItems}
                            setCartState={cartStateItemSetter}
                        /> : <IncrementAndDecrementButtons
                            incrementBtnStyle={incrementBtnStyle}
                            decrementBtnStyle={decrementBtnStyle}
                            incrementBtnClass={incrementBtnClass}
                            decrementBtnClass={decrementBtnClass}
                            product={product}
                            cartStateItems={cartStateItems}
                            setCartState={cartStateItemSetter}
                        />}
                </React.Fragment>
            }
        </div>
    )
}


function ItemsInCart({ isCartLogo = true, newLogo, isDescription = true, description }) {
    const cartContext = useContext(CartContext);
    const cartStateItems = cartContext?.cartState
    if (!cartStateItems) {
        return (
            <div></div>
        )
    }

    return (
        <div className="af__items_in_cart">{isCartLogo && !newLogo && <svg xmlns="http://www.w3.org/2000/svg" className="af__cart_icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
        </svg>} {` ${cartStateItems?.length} `} {isDescription && <span style={{ paddingLeft: "4px" }}>{description ? ` ${description}` : ' items(s)'}</span>}</div>
    )
}

export {
    CartButton,
    ItemsInCart
}