"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// CustomAlert.jsx

var VARIANT_STYLES = {
  success: {
    bg: "bg-green-50",
    text: "text-green-800",
    border: "border-green-200",
    icon: /*#__PURE__*/_react["default"].createElement(_fa.FaCheckCircle, {
      className: "w-5 h-5 text-green-600"
    })
  },
  error: {
    bg: "bg-red-50",
    text: "text-red-800",
    border: "border-red-200",
    icon: /*#__PURE__*/_react["default"].createElement(_fa.FaTimesCircle, {
      className: "w-5 h-5 text-red-600"
    })
  },
  warning: {
    bg: "bg-yellow-50",
    text: "text-yellow-800",
    border: "border-yellow-200",
    icon: /*#__PURE__*/_react["default"].createElement(_fa.FaExclamationTriangle, {
      className: "w-5 h-5 text-yellow-600"
    })
  },
  info: {
    bg: "bg-blue-50",
    text: "text-blue-800",
    border: "border-blue-200",
    icon: /*#__PURE__*/_react["default"].createElement(_fa.FaInfoCircle, {
      className: "w-5 h-5 text-blue-600"
    })
  }
};
var CustomAlert = function CustomAlert(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "info" : _ref$variant,
    title = _ref.title,
    message = _ref.message,
    _ref$show = _ref.show,
    show = _ref$show === void 0 ? true : _ref$show,
    onClose = _ref.onClose,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  if (!show) return null;
  var styles = VARIANT_STYLES[variant] || VARIANT_STYLES.info;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-start gap-3 p-4 border rounded-lg ".concat(styles.bg, " ").concat(styles.text, " ").concat(styles.border, " ").concat(className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-shrink-0"
  }, styles.icon), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1"
  }, title && /*#__PURE__*/_react["default"].createElement("h4", {
    className: "font-semibold"
  }, title), message && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm"
  }, message)), onClose && /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    className: "text-gray-400 hover:text-gray-600 transition-colors"
  }, "\u2715"));
};
var _default = exports["default"] = CustomAlert;