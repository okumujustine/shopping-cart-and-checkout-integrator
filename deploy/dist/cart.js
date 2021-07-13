"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartButton = CartButton;
exports.TotalItemsInCart = TotalItemsInCart;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireWildcard(require("react"));

var _cartContext = require("./cart-context");

var _alerts = require("./alerts");

var _cartButtons = require("./cart-buttons");

require("./styles/custom.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function CartButton(_ref) {
  let {
    product,
    buttonClass,
    buttonStyle,
    isIncrementAndDecrementBtn = true
  } = _ref;
  const cartContext = (0, _react.useContext)(_cartContext.CartContext);
  const addToCartBtnClass = buttonClass === null || buttonClass === void 0 ? void 0 : buttonClass.addToCart;
  const incrementBtnClass = buttonClass === null || buttonClass === void 0 ? void 0 : buttonClass.increment;
  const decrementBtnClass = buttonClass === null || buttonClass === void 0 ? void 0 : buttonClass.decrement;
  const addToCartBtnStyle = buttonStyle === null || buttonStyle === void 0 ? void 0 : buttonStyle.addToCart;
  const incrementBtnStyle = buttonStyle === null || buttonStyle === void 0 ? void 0 : buttonStyle.increment;
  const decrementBtnStyle = buttonStyle === null || buttonStyle === void 0 ? void 0 : buttonStyle.decrement;
  const cartStateItems = cartContext === null || cartContext === void 0 ? void 0 : cartContext.cartState;
  const cartStateItemSetter = cartContext === null || cartContext === void 0 ? void 0 : cartContext.setCartState;

  if (!cartStateItems || !cartStateItemSetter) {
    return /*#__PURE__*/_react.default.createElement(_alerts.Alert, {
      alertList: [{
        id: 1,
        title: "CartWrapper",
        description: "Application must be wrapped in a CartWrapper container!"
      }],
      position: "top-right",
      type: "danger",
      dismissTime: 100000
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", null, !cartStateItems.some(el => el.id === product.id) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_cartButtons.AddToCartButton, {
    addToCartBtnClass: addToCartBtnClass,
    addToCartBtnStyle: addToCartBtnStyle,
    product: product,
    cartStateItems: cartStateItems,
    setCartState: cartStateItemSetter
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isIncrementAndDecrementBtn ? /*#__PURE__*/_react.default.createElement(_cartButtons.AddToCartButton, {
    addToCartBtnClass: addToCartBtnClass,
    addToCartBtnStyle: addToCartBtnStyle,
    product: product,
    cartStateItems: cartStateItems,
    setCartState: cartStateItemSetter
  }) : /*#__PURE__*/_react.default.createElement(_cartButtons.IncrementAndDecrementButtons, {
    incrementBtnStyle: incrementBtnStyle,
    decrementBtnStyle: decrementBtnStyle,
    incrementBtnClass: incrementBtnClass,
    decrementBtnClass: decrementBtnClass,
    product: product,
    cartStateItems: cartStateItems,
    setCartState: cartStateItemSetter
  })));
}

function TotalItemsInCart(_ref2) {
  let {
    isCartLogo = true,
    newLogo,
    isDescription = true,
    description
  } = _ref2;
  const cartContext = (0, _react.useContext)(_cartContext.CartContext);
  const cartStateItems = cartContext === null || cartContext === void 0 ? void 0 : cartContext.cartState;

  if (!cartStateItems) {
    return /*#__PURE__*/_react.default.createElement("div", null);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "af__items_in_cart"
  }, isCartLogo && !newLogo && /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "af__cart_icon",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
    clipRule: "evenodd"
  })), " ", " ".concat(cartStateItems === null || cartStateItems === void 0 ? void 0 : cartStateItems.length, " "), " ", isDescription && /*#__PURE__*/_react.default.createElement("span", {
    style: {
      paddingLeft: "4px"
    }
  }, description ? " ".concat(description) : ' items(s)'));
}