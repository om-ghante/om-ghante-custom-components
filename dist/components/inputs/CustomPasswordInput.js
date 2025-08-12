"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // src/components/inputs/CustomPasswordInput.jsx
var CustomPasswordInput = function CustomPasswordInput(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? 'Password' : _ref$label,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? 'Enter your password' : _ref$placeholder,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? 'password' : _ref$name,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? '' : _ref$error,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    onChange = _ref.onChange;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showPassword = _useState4[0],
    setShowPassword = _useState4[1];
  var handleChange = function handleChange(e) {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col gap-1 ".concat(fullWidth ? 'w-full' : 'w-fit', " ").concat(className)
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: "text-sm font-medium text-gray-700"
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: showPassword ? 'text' : 'password',
    name: name,
    placeholder: placeholder,
    value: value,
    onChange: handleChange,
    disabled: disabled,
    className: "px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 pr-10 w-full\n            ".concat(error ? 'border-red-500' : 'border-gray-300', " \n            ").concat(disabled ? 'bg-gray-100 cursor-not-allowed' : '', "\n          ")
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700",
    onClick: function onClick() {
      return setShowPassword(!showPassword);
    },
    disabled: disabled
  }, showPassword ? /*#__PURE__*/_react["default"].createElement(_fa.FaEyeSlash, null) : /*#__PURE__*/_react["default"].createElement(_fa.FaEye, null))), error && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xs text-red-500"
  }, error));
};
var _default = exports["default"] = CustomPasswordInput;