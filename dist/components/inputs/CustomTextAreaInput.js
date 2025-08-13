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
var CustomTextAreaInput = function CustomTextAreaInput(_ref) {
  var label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    placeholder = _ref.placeholder,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? 4 : _ref$rows,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className,
    style: _objectSpread({
      marginBottom: '1rem'
    }, style)
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      display: 'block',
      color: '#374151',
      fontSize: '0.875rem',
      fontWeight: '700',
      marginBottom: '0.5rem'
    }
  }, label), /*#__PURE__*/_react["default"].createElement("textarea", {
    style: {
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      appearance: 'none',
      border: '1px solid #d1d5db',
      // Default border color
      borderRadius: '0.25rem',
      width: '100%',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      paddingLeft: '0.75rem',
      paddingRight: '0.75rem',
      color: '#374151',
      lineHeight: '1.25',
      outline: 'none'
    },
    className: className,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows
  }));
};
var _default = exports["default"] = CustomTextAreaInput;