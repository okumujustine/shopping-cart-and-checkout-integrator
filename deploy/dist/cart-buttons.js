"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncrementAndDecrementButtons = IncrementAndDecrementButtons;
exports.AddToCartButton = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _action = require("./helpers/action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IncrementAndDecrementButtons(_ref) {
  let {
    product,
    cartStateItems,
    setCartState
  } = _ref;

  const decrementItemQuantity = (itemsInCart, newProduct) => {
    let cartItems = itemsInCart === null || itemsInCart === void 0 ? void 0 : itemsInCart.slice();

    if (newProduct.quantity === 1) {
      var _cartItems;

      cartItems = (_cartItems = cartItems) === null || _cartItems === void 0 ? void 0 : _cartItems.filter(a => a.id !== newProduct.id);
      cartItems.length <= 0 ? setCartState([]) : setCartState([...cartItems]);
      return;
    }

    const found = (0, _action.isProductInArray)(cartItems, newProduct);

    if (!found) {
      console.log("item does not exist in cart , reload and add to cart.. sorry");
    } else {
      (0, _action.decrementArrayQuantity)(cartItems, newProduct);
    }

    setCartState([...cartItems]);
  };

  const incrementItemQuantity = (itemsInCart, newProduct) => {
    const cartItems = itemsInCart === null || itemsInCart === void 0 ? void 0 : itemsInCart.slice();
    const found = (0, _action.isProductInArray)(cartItems, newProduct);

    if (!found) {
      cartItems.push(newProduct);
      return setCartState([...cartItems]);
    }

    (0, _action.incrementArrayQuantity)(cartItems, newProduct);
    return setCartState([...cartItems]);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cart__in__cart__button_main w-full"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "cart__in__cart__button cart__in__cart__button_increment",
    onClick: () => incrementItemQuantity(cartStateItems, product)
  }, /*#__PURE__*/_react.default.createElement("span", null, "+")), /*#__PURE__*/_react.default.createElement("span", null, (0, _action.getQuantityFromArray)(cartStateItems, product).quantity), /*#__PURE__*/_react.default.createElement("button", {
    className: "cart__in__cart__button cart__in__cart__button_decrement",
    onClick: () => decrementItemQuantity(cartStateItems, product)
  }, /*#__PURE__*/_react.default.createElement("span", null, "-")));
}

const AddToCartButton = _ref2 => {
  let {
    product,
    cartStateItems,
    setCartState
  } = _ref2;

  const addToCart = () => {
    const cartItems = cartStateItems === null || cartStateItems === void 0 ? void 0 : cartStateItems.slice();
    const found = (0, _action.isProductInArray)(cartItems, product);

    if (!found) {
      cartItems.push(product);
    } else {
      (0, _action.incrementArrayQuantity)(cartItems, product);
    }

    setCartState([...cartItems]);
  };

  return /*#__PURE__*/_react.default.createElement("button", {
    className: "cart__add__to__button",
    onClick: addToCart
  }, /*#__PURE__*/_react.default.createElement("span", null, "Add to Card"));
};

exports.AddToCartButton = AddToCartButton;