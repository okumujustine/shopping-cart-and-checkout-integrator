import React, { useContext } from 'react'
import { CartContext } from "./cart-context"
import { Alert } from "./alerts"

import { IncrementAndDecrementButtons, AddToCartButton } from "./cart-buttons"
import "./styles/custom.css"

function CartButton({ product }) {

    const cartContext = useContext(CartContext);

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
                        product={product}
                        cartStateItems={cartStateItems}
                        setCartState={cartStateItemSetter}
                    />
                </React.Fragment>

                :
                <React.Fragment>
                    <IncrementAndDecrementButtons
                        product={product}
                        cartStateItems={cartStateItems}
                        setCartState={cartStateItemSetter}
                    />
                </React.Fragment>
            }
        </div>
    )
}


function CartValueWithLogo() {
    const cartContext = useContext(CartContext);
    const cartStateItems = cartContext?.cartState
    if (!cartStateItems) {
        return (
            <div></div>
        )
    }

    return (
        <div>{cartStateItems?.length} items(s)</div>
    )
}

export {
    CartButton,
    CartValueWithLogo
}