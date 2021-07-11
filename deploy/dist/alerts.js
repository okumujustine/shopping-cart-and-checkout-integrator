"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = Alert;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Alert(_ref) {
  let {
    position,
    alertList,
    autoDelete = true,
    dismissTime,
    type
  } = _ref;

  const [list, setList] = _react.default.useState(alertList);

  _react.default.useEffect(() => {
    setList([...alertList]);
  }, [alertList]);

  _react.default.useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && alertList.length && list.length) {
        deleteAlert(alertList[0].id);
      }
    }, dismissTime);
    return () => {
      clearInterval(interval);
    }; // eslint-disable-next-line
  }, [alertList, autoDelete, dismissTime, list]);

  const deleteAlert = id => {
    const listItemIndex = list.findIndex(e => e.id === id);
    const toastListItem = alertList.findIndex(e => e.id === id);
    list.splice(listItemIndex, 1);
    alertList.splice(toastListItem, 1);
    setList([...list]);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "notification-container  ".concat(position, " ")
  }, list.map((alert, i) => /*#__PURE__*/_react.default.createElement("div", {
    key: i,
    className: "notification toast ".concat(position, " ").concat(type)
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => deleteAlert(alert.id)
  }, "X"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "notification-title"
  }, alert.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "notification-message"
  }, alert.description))))));
}