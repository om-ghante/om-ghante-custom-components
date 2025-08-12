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
    error = _ref.error;
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
      onClick = _ref2.onClick;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex items-center w-full px-3 py-2 border rounded-md ".concat(error ? "border-red-500" : "border-gray-300")
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      className: "flex-1 text-gray-700 outline-none bg-transparent",
      placeholder: placeholder,
      value: value,
      ref: ref,
      onClick: function onClick(e) {
        return e.stopPropagation();
      } // prevent click from toggling picker
      ,
      readOnly: true // keep readOnly to avoid invalid manual text input
    }), /*#__PURE__*/_react["default"].createElement(_lucideReact.Clock, {
      className: "h-5 w-5 text-gray-400 cursor-pointer",
      onClick: toggleTimePicker
    }));
  });
  CustomInput.displayName = "CustomTimeInput";
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col w-full"
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: "mb-1 text-gray-700 font-medium"
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
    className: "text-red-500 text-sm mt-1"
  }, error));
};
var _default = exports["default"] = CustomTimePicker;