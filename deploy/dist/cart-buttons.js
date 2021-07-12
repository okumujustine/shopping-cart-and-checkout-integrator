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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function IncrementAndDecrementButtons(_ref) {
  let {
    product,
    cartStateItems,
    setCartState,
    incrementBtnClass,
    decrementBtnClass,
    incrementBtnStyle,
    decrementBtnStyle
  } = _ref;
  console.log(incrementBtnClass);

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
    className: "cart__in__cart__button cart__in__cart__button_increment ".concat(incrementBtnClass),
    style: _objectSpread({}, incrementBtnStyle),
    onClick: () => incrementItemQuantity(cartStateItems, product)
  }, /*#__PURE__*/_react.default.createElement("span", null, "+")), /*#__PURE__*/_react.default.createElement("span", null, (0, _action.getQuantityFromArray)(cartStateItems, product).quantity), /*#__PURE__*/_react.default.createElement("button", {
    className: "cart__in__cart__button cart__in__cart__button_decrement ".concat(decrementBtnClass),
    style: _objectSpread({}, decrementBtnStyle),
    onClick: () => decrementItemQuantity(cartStateItems, product)
  }, /*#__PURE__*/_react.default.createElement("span", null, "-")));
}

const AddToCartButton = _ref2 => {
  let {
    product,
    cartStateItems,
    setCartState,
    addToCartBtnClass,
    addToCartBtnStyle
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
    className: "cart__add__to__button ".concat(addToCartBtnClass),
    onClick: addToCart,
    style: _objectSpread({}, addToCartBtnStyle)
  }, /*#__PURE__*/_react.default.createElement("span", null, "Add to Cart"));
};

exports.AddToCartButton = AddToCartButton;