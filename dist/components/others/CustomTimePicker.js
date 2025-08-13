"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
var _lucideReact = require("lucide-react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // components/others/CustomTimePicker.jsx
var CustomTimePicker = function CustomTimePicker(_ref) {
  var label = _ref.label,
    selectedTime = _ref.selectedTime,
    _onChange = _ref.onChange,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "hh:mm AM/PM" : _ref$placeholder,
    error = _ref.error,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isTimePickerOpen = _useState2[0],
    setTimePickerOpen = _useState2[1];

  // Toggle time picker only when clicking the icon
  var toggleTimePicker = function toggleTimePicker(e) {
    e.stopPropagation();
    setTimePickerOpen(function (prev) {
      return !prev;
    });
  };

  // Custom input for TimePicker
  var CustomInput = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2, ref) {
    var value = _ref2.value,
      onClick = _ref2.onClick,
      className = _ref2.className,
      style = _ref2.style;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: className,
      style: _objectSpread({
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        border: '1px solid',
        borderRadius: '0.375rem',
        borderColor: error ? '#ef4444' : '#d1d5db'
      }, style)
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      style: {
        flex: '1 1 0%',
        color: '#374151',
        outline: 'none',
        backgroundColor: 'transparent'
      },
      placeholder: placeholder,
      value: value,
      ref: ref,
      onClick: function onClick(e) {
        return e.stopPropagation();
      } // prevent click from toggling picker
      ,
      readOnly: true // keep readOnly to avoid invalid manual text input
    }), /*#__PURE__*/_react["default"].createElement(_lucideReact.Clock, {
      style: {
        height: '1.25rem',
        width: '1.25rem',
        color: '#9ca3af',
        cursor: 'pointer'
      },
      onClick: toggleTimePicker
    }));
  });
  CustomInput.displayName = "CustomTimeInput";
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className,
    style: _objectSpread({
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }, style)
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      marginBottom: '0.25rem',
      color: '#374151',
      fontWeight: '500'
    }
  }, label), /*#__PURE__*/_react["default"].createElement(_reactDatepicker["default"], {
    selected: selectedTime,
    onChange: function onChange(time) {
      _onChange(time);
      setTimePickerOpen(false);
    },
    showTimeSelect: true,
    showTimeSelectOnly: true,
    timeIntervals: 5,
    timeCaption: "Time",
    dateFormat: "h:mm aa",
    open: isTimePickerOpen,
    onClickOutside: function onClickOutside() {
      return setTimePickerOpen(false);
    },
    shouldCloseOnSelect: true,
    customInput: /*#__PURE__*/_react["default"].createElement(CustomInput, null)
  }), error && /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: '#ef4444',
      fontSize: '0.875rem',
      marginTop: '0.25rem'
    }
  }, error));
};
var _default = exports["default"] = CustomTimePicker;