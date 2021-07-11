"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartButton = CartButton;
exports.CartValueWithLogo = CartValueWithLogo;

var _react = _interopRequireWildcard(require("react"));

var _cartContext = require("./cart-context");

var _alerts = require("./alerts");

var _cartButtons = require("./cart-buttons");

require("./styles/custom.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function CartButton(_ref) {
  let {
    product
  } = _ref;
  const cartContext = (0, _react.useContext)(_cartContext.CartContext);
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
    product: product,
    cartStateItems: cartStateItems,
    setCartState: cartStateItemSetter
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_cartButtons.IncrementAndDecrementButtons, {
    product: product,
    cartStateItems: cartStateItems,
    setCartState: cartStateItemSetter
  })));
}

function CartValueWithLogo() {
  const cartContext = (0, _react.useContext)(_cartContext.CartContext);
  const cartStateItems = cartContext === null || cartContext === void 0 ? void 0 : cartContext.cartState;

  if (!cartStateItems) {
    return /*#__PURE__*/_react.default.createElement("div", null);
  }

  return /*#__PURE__*/_react.default.createElement("div", null, cartStateItems === null || cartStateItems === void 0 ? void 0 : cartStateItems.length, " items(s)");
}