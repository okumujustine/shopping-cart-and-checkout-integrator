"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.incrementArrayQuantity = incrementArrayQuantity;
exports.isProductInArray = isProductInArray;
exports.decrementArrayQuantity = decrementArrayQuantity;
exports.getQuantityFromArray = getQuantityFromArray;

function decrementArrayQuantity(array, object) {
  array.forEach(item => {
    if (item.id === object.id) {
      item.quantity -= 1;
    }
  });
}

function incrementArrayQuantity(array, object) {
  array.forEach(item => {
    if (item.id === object.id) {
      item.quantity += 1;
    }
  });
}

function isProductInArray(array, product) {
  return array.some(el => el.id === product.id);
}

function getQuantityFromArray(cartItems, productToFind) {
  return cartItems.find(cartItem => cartItem.id === productToFind.id);
}