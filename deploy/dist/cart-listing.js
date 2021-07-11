"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartListing = CartListing;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _cartContext = require("./cart-context");

var _cart = require("./cart");

var _cartButtons = require("./cart-buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CartListing(_ref) {
  let {
    currencySign,
    continueToCheckout
  } = _ref;

  const cartContext = _react.default.useContext(_cartContext.CartContext);

  const cartStateItems = cartContext === null || cartContext === void 0 ? void 0 : cartContext.cartState;
  const cartStateItemSetter = cartContext === null || cartContext === void 0 ? void 0 : cartContext.setCartState;

  function totalPrice(array) {
    let total = 0;

    for (var i = 0; i < array.length; i++) {
      var _array$i;

      total += ((_array$i = array[i]) === null || _array$i === void 0 ? void 0 : _array$i.price) * array[i].quantity;
    }

    return total;
  }

  const cartTotalPrice = _ref2 => {
    let {
      price,
      quantity
    } = _ref2;
    return price * quantity;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full mx-2"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Shopping Cart"), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/_react.default.createElement(_cart.CartValueWithLogo, null)), cartStateItems.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, cartStateItems.map((cartItem, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    className: "flex justify-between items-center pb-25 mb-2 py-10 margin-bottom cart__item"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-2/12 af__cart__bg_image",
    style: {
      backgroundImage: "url(" + cartItem.image + ")"
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-4/12"
  }, /*#__PURE__*/_react.default.createElement("h5", null, cartItem === null || cartItem === void 0 ? void 0 : cartItem.name), /*#__PURE__*/_react.default.createElement("p", null, cartItem === null || cartItem === void 0 ? void 0 : cartItem.description)), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-2/12"
  }, "".concat(cartItem === null || cartItem === void 0 ? void 0 : cartItem.quantity)), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-4/12"
  }, /*#__PURE__*/_react.default.createElement("p", null, currencySign, cartTotalPrice(cartItem)), /*#__PURE__*/_react.default.createElement(_cartButtons.IncrementAndDecrementButtons, {
    product: cartItem,
    cartStateItems: cartStateItems,
    setCartState: cartStateItemSetter
  }))))), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h5", null, "Total: ", currencySign, totalPrice(cartStateItems)), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => continueToCheckout({
      total_price: totalPrice(cartStateItems),
      currency_sign: currencySign,
      cart_items: cartStateItems
    }),
    className: "cart__proceed_to__checkout_button"
  }, "Proceed to checkout"))), cartStateItems.length <= 0 && /*#__PURE__*/_react.default.createElement("div", null, "No item in cart"));
}