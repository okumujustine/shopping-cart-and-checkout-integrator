

function decrementArrayQuantity(array, object) {
    array.forEach((item) => {
        if (item.id === object.id) {
            item.quantity -= 1;

        }
    });
}

function incrementArrayQuantity(array, object) {
    array.forEach((item) => {
        if (item.id === object.id) {
            item.quantity += 1;

        }
    });
}

function isProductInArray(array, product) {
    return array.some(el => el.id === product.id)
}

function getQuantityFromArray(cartItems, productToFind) {
    return cartItems.find(cartItem => cartItem.id === productToFind.id);
}

export {
    incrementArrayQuantity,
    isProductInArray,
    decrementArrayQuantity,
    getQuantityFromArray
}