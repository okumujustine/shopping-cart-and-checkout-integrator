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
Object.defineProperty(exports, "TotalItemsInCart", {
  enumerable: true,
  get: function get() {
    return _cart.TotalItemsInCart;
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
    children,
    cartShow = true,
    currencySign,
    continueToCheckout
  } = _ref;

  const [cartState, setCartState] = _react.default.useReducer(_cartContext.cartReducer, []);

  const [cartShowWithin, setCartShowWithin] = _react.default.useState(false);

  const [currencySignInternal, setCurrencySignInternal] = _react.default.useState("");

  const closeCart = () => {
    setCartShowWithin(false);
  };

  _react.default.useEffect(() => {
    if (currencySign) {
      setCurrencySignInternal(currencySign);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  function goToCheckout() {
    console.log("make sure continueToCheckout prop is passed");
  }

  return /*#__PURE__*/_react.default.createElement(_cartContext.CartContext.Provider, {
    value: {
      cartState,
      setCartState,
      cartShow,
      cartShowWithin,
      setCartShowWithin,
      closeCart,
      currencySignInternal,
      goToCheckout
    }
  }, cartShowWithin && cartShowWithin ? /*#__PURE__*/_react.default.createElement(_cartListing.CartListing, {
    currencySign: currencySignInternal,
    continueToCheckout: continueToCheckout
  }) : null, children);
}