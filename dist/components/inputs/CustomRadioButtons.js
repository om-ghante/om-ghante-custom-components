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
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // src/components/inputs/CustomRadioButtons.jsx
var CustomRadioButtons = function CustomRadioButtons(_ref) {
  var _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? "radio-group" : _ref$name,
    selectedValue = _ref.selectedValue,
    onChange = _ref.onChange,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? "" : _ref$label,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "row" : _ref$direction,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  var handleChange = function handleChange(value) {
    if (onChange) {
      onChange(value);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className,
    style: _objectSpread({
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }, style)
  }, label && /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontWeight: '500',
      color: '#374151'
    }
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: direction === 'column' ? 'column' : 'row',
      gap: direction === 'column' ? '0.5rem' : '1rem'
    }
  }, options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("label", {
      key: option.value,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1
      }
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "radio",
      name: name,
      value: option.value,
      checked: selectedValue === option.value,
      onChange: function onChange() {
        return handleChange(option.value);
      },
      disabled: disabled,
      style: {
        appearance: 'none',
        borderRadius: '9999px',
        border: '1px solid',
        borderColor: selectedValue === option.value ? 'transparent' : '#d1d5db',
        outline: 'none',
        width: '1rem',
        // Default size (md)
        height: '1rem',
        // Default size (md)
        backgroundColor: selectedValue === option.value ? '#2563eb' : 'transparent',
        position: 'relative',
        display: 'inline-block',
        flexShrink: 0
      }
    }), /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        color: '#000000'
      }
    }, option.label));
  })));
};
var _default = exports["default"] = CustomRadioButtons;