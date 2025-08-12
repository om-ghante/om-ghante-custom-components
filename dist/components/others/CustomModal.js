"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var CustomModal = function CustomModal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    title = _ref.title,
    children = _ref.children,
    footer = _ref.footer;
  if (!isOpen) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 flex items-center justify-center z-50"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-black opacity-50",
    onClick: onClose
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative bg-white rounded-lg shadow-lg max-w-lg w-full z-10 p-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between items-center border-b pb-2"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-semibold"
  }, title), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    className: "text-gray-500 hover:text-gray-800 text-xl font-bold"
  }, "\xD7")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4"
  }, children), footer && /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-6 flex justify-end gap-3"
  }, footer)));
};
var _default = exports["default"] = CustomModal;