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
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // CustomDropDown.jsx
var CustomDropDown = function CustomDropDown(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? "Select an option" : _ref$label,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    value = _ref.value,
    _onChange = _ref.onChange,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Choose..." : _ref$placeholder,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? "" : _ref$error,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className,
    style: _objectSpread({
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
      width: fullWidth ? '100%' : 'fit-content'
    }, style)
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151'
    }
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/_react["default"].createElement("select", {
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    disabled: disabled,
    className: className,
    style: {
      appearance: 'none',
      paddingLeft: '1rem',
      paddingRight: '2.5rem',
      // pr-10
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      borderRadius: '0.5rem',
      border: '1px solid',
      outline: 'none',
      fontSize: '0.875rem',
      transition: 'all 0.15s ease-in-out',
      backgroundColor: disabled ? '#f3f4f6' : '#ffffff',
      cursor: disabled ? 'not-allowed' : 'pointer',
      borderColor: error ? '#ef4444' : '#d1d5db',
      width: fullWidth ? '100%' : 'fit-content'
    }
  }, placeholder && /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, placeholder), options.map(function (opt, index) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: index,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/_react["default"].createElement(_fa.FaChevronDown, {
    style: {
      position: 'absolute',
      right: '0.75rem',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af',
      pointerEvents: 'none'
    }
  })), error && /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: '#ef4444'
    }
  }, error));
};
var _default = exports["default"] = CustomDropDown;