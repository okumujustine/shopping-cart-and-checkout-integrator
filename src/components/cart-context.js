import { createContext } from 'react';

const CartContext = createContext();

function cartReducer(state, items) {
    const finalState = (items.length >= 0) ? items : state
    return [...finalState]
}

export {
    CartContext,
    cartReducer
};