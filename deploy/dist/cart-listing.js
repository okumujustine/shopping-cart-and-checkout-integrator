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
    isCartLogo,
    newLogo,
    isDescription = true,
    description,
    cartDetailsBtnClass,
    cartDetailsBtnStyle,
    continueToCheckout
  } = _ref;

  const cartContext = _react.default.useContext(_cartContext.CartContext);

  const cartStateItems = cartContext === null || cartContext === void 0 ? void 0 : cartContext.cartState;
  const cartStateItemSetter = cartContext === null || cartContext === void 0 ? void 0 : cartContext.setCartState;
  const closeCart = cartContext === null || cartContext === void 0 ? void 0 : cartContext.closeCart;
  const cartShow = cartContext === null || cartContext === void 0 ? void 0 : cartContext.cartShow;
  const incrementBtnClass = cartDetailsBtnClass === null || cartDetailsBtnClass === void 0 ? void 0 : cartDetailsBtnClass.increment;
  const decrementBtnClass = cartDetailsBtnClass === null || cartDetailsBtnClass === void 0 ? void 0 : cartDetailsBtnClass.decrement;
  const incrementBtnStyle = cartDetailsBtnStyle === null || cartDetailsBtnStyle === void 0 ? void 0 : cartDetailsBtnStyle.increment;
  const decrementBtnStyle = cartDetailsBtnStyle === null || cartDetailsBtnStyle === void 0 ? void 0 : cartDetailsBtnStyle.decrement;

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

  const removeFromCart = item => {
    for (var n = 0; n < cartStateItems.length; n++) {
      if (cartStateItems[n].id === item.id) {
        cartStateItems.splice(n, 1);
        console.log(cartStateItems);
        cartStateItemSetter(cartStateItems);
        break;
      }
    }
  };

  const cartClass = () => {
    if (!cartShow) {
      return "w-full mx-2 af__main_class";
    }

    return "w-full af__cart_show_class af__main_class";
  };

  function checkoutFun(checkoutFunData) {
    if (!continueToCheckout) {
      cartContext === null || cartContext === void 0 ? void 0 : cartContext.goToCheckout(checkoutFunData);
    } else {
      continueToCheckout(checkoutFunData);
    }
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: cartClass()
  }, cartShow && /*#__PURE__*/_react.default.createElement("div", {
    className: "af__cart_show_class_left"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: closeCart,
    style: {
      backgroundColor: "white",
      border: "none",
      marginTop: "5px",
      marginLeft: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "af__delete_icon",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
    clipRule: "evenodd"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: cartShow ? "af__cart_show_class_right" : ""
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex af__title_close_button"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Shopping Cart"), cartShow && /*#__PURE__*/_react.default.createElement("svg", {
    onClick: closeCart,
    xmlns: "http://www.w3.org/2000/svg",
    className: "af__delete_icon",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
    clipRule: "evenodd"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/_react.default.createElement(_cart.TotalItemsInCart, {
    isCartLogo: isCartLogo,
    newLogo: newLogo,
    isDescription: isDescription,
    description: description
  })), cartStateItems.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, cartStateItems.map((cartItem, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    className: "flex justify-between items-center pb-25 mb-2 py-10 margin-bottom cart__item"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-2/12 af__cart__bg_image",
    style: {
      backgroundImage: "url(" + cartItem.image + ")"
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-5/12",
    style: {
      marginLeft: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "af__hide_text_1line"
  }, cartItem === null || cartItem === void 0 ? void 0 : cartItem.name), /*#__PURE__*/_react.default.createElement("p", {
    className: "af__hide_text_2lines"
  }, cartItem === null || cartItem === void 0 ? void 0 : cartItem.description), /*#__PURE__*/_react.default.createElement(_cartButtons.IncrementAndDecrementButtons, {
    incrementBtnStyle: incrementBtnStyle,
    decrementBtnStyle: decrementBtnStyle,
    incrementBtnClass: incrementBtnClass,
    decrementBtnClass: decrementBtnClass,
    product: cartItem,
    cartStateItems: cartStateItems,
    setCartState: cartStateItemSetter
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-3/12 flex flex-col items-center"
  }, "".concat(cartItem === null || cartItem === void 0 ? void 0 : cartItem.quantity), /*#__PURE__*/_react.default.createElement("p", null, currencySign, cartTotalPrice(cartItem))), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-1/12 flex flex-col"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("svg", {
    onClick: () => removeFromCart(cartItem),
    xmlns: "http://www.w3.org/2000/svg",
    className: "af__delete_icon",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  }))))))), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h5", null, "Total: ", currencySign, /*#__PURE__*/_react.default.createElement("span", {
    id: "af__total_price"
  }, totalPrice(cartStateItems))), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => checkoutFun({
      total_price: totalPrice(cartStateItems),
      currency_sign: currencySign,
      cart_items: cartStateItems
    }),
    className: "cart__proceed_to__checkout_button"
  }, "Proceed to checkout"))), cartStateItems.length <= 0 && /*#__PURE__*/_react.default.createElement("div", null, "No item in cart")));
}