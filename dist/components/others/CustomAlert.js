"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // CustomAlert.jsx
var VARIANT_STYLES = {
  success: {
    backgroundColor: "#f0fdf4",
    // bg-green-50
    color: "#166534",
    // text-green-800
    borderColor: "#bbf7d0",
    // border-green-200
    icon: /*#__PURE__*/_react["default"].createElement(_fa.FaCheckCircle, {
      style: {
        width: '1.25rem',
        height: '1.25rem',
        color: '#22c55e'
      }
    }) // text-green-600
  },
  error: {
    backgroundColor: "#fef2f2",
    // bg-red-50
    color: "#991b1b",
    // text-red-800
    borderColor: "#fecaca",
    // border-red-200
    icon: /*#__PURE__*/_react["default"].createElement(_fa.FaTimesCircle, {
      style: {
        width: '1.25rem',
        height: '1.25rem',
        color: '#ef4444'
      }
    }) // text-red-600
  },
  warning: {
    backgroundColor: "#fffbeb",
    // bg-yellow-50
    color: "#92400e",
    // text-yellow-800
    borderColor: "#fde68a",
    // border-yellow-200
    icon: /*#__PURE__*/_react["default"].createElement(_fa.FaExclamationTriangle, {
      style: {
        width: '1.25rem',
        height: '1.25rem',
        color: '#eab308'
      }
    }) // text-yellow-600
  },
  info: {
    backgroundColor: "#eff6ff",
    // bg-blue-50
    color: "#1e40af",
    // text-blue-800
    borderColor: "#bfdbfe",
    // border-blue-200
    icon: /*#__PURE__*/_react["default"].createElement(_fa.FaInfoCircle, {
      style: {
        width: '1.25rem',
        height: '1.25rem',
        color: '#3b82f6'
      }
    }) // text-blue-600
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
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  if (!show) return null;
  var styles = VARIANT_STYLES[variant] || VARIANT_STYLES.info;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className,
    style: _objectSpread({
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem',
      padding: '1rem',
      border: '1px solid',
      borderRadius: '0.5rem',
      backgroundColor: styles.backgroundColor,
      color: styles.color,
      borderColor: styles.borderColor
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      flexShrink: 0
    }
  }, styles.icon), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      flex: '1 1 0%'
    }
  }, title && /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      fontWeight: '600'
    }
  }, title), message && /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.875rem'
    }
  }, message)), onClose && /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    style: {
      color: '#9ca3af',
      transition: 'color 0.15s ease-in-out',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, "\u2715"));
};
var _default = exports["default"] = CustomAlert;