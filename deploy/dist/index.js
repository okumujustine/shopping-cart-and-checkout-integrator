"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartWrapper = CartWrapper;
Object.defineProperty(exports, "CartButton", {
  enumerable: true,
  get: function get() {
    return _cart.CartButton;
  }
});
Object.defineProperty(exports, "CartValueWithLogo", {
  enumerable: true,
  get: function get() {
    return _cart.CartValueWithLogo;
  }
});
Object.defineProperty(exports, "CartListing", {
  enumerable: true,
  get: function get() {
    return _cartListing.CartListing;
  }
});

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _cart = require("./cart");

var _cartContext = require("./cart-context");

var _cartListing = require("./cart-listing");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CartWrapper(_ref) {
  let {
    children
  } = _ref;

  const [cartState, setCartState] = _react.default.useReducer(_cartContext.cartReducer, []);

  return /*#__PURE__*/_react.default.createElement(_cartContext.CartContext.Provider, {
    value: {
      cartState,
      setCartState
    }
  }, children);
}