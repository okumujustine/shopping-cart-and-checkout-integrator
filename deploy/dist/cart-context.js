"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartReducer = cartReducer;
exports.CartContext = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const CartContext = /*#__PURE__*/(0, _react.createContext)();
exports.CartContext = CartContext;

function cartReducer(state, items) {
  const finalState = items.length >= 0 ? items : state;
  return [...finalState];
}