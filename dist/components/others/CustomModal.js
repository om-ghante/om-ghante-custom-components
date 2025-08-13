"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CustomModal = function CustomModal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    title = _ref.title,
    children = _ref.children,
    footer = _ref.footer,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  if (!isOpen) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className,
    style: _objectSpread({
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#000000',
      opacity: 0.5
    },
    onClick: onClose
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'relative',
      backgroundColor: '#ffffff',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '32rem',
      width: '100%',
      zIndex: 10,
      padding: '1.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #e5e7eb',
      // Using a light gray color
      paddingBottom: '0.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    style: {
      fontSize: '1.25rem',
      fontWeight: '600'
    }
  }, title), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    style: {
      color: '#6b7280',
      fontSize: '1.25rem',
      fontWeight: '700',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, "\xD7")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '1rem'
    }
  }, children), footer && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '1.5rem',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '0.75rem'
    }
  }, footer)));
};
var _default = exports["default"] = CustomModal;