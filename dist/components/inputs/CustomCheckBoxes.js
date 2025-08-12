"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // src/components/inputs/CustomCheckBoxes.jsx
var CustomCheckBoxes = function CustomCheckBoxes(_ref) {
  var _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    onChange = _ref.onChange,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'vertical' : _ref$direction,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedValues = _useState2[0],
    setSelectedValues = _useState2[1];
  var VARIANT_CLASSES = {
    primary: 'text-blue-600 focus:ring-blue-500',
    secondary: 'text-gray-600 focus:ring-gray-500',
    danger: 'text-red-600 focus:ring-red-500'
  };
  var handleCheckboxChange = function handleCheckboxChange(value) {
    if (disabled) return;
    var updatedValues = selectedValues.includes(value) ? selectedValues.filter(function (v) {
      return v !== value;
    }) : [].concat(_toConsumableArray(selectedValues), [value]);
    setSelectedValues(updatedValues);
    if (onChange) {
      onChange(updatedValues);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex ".concat(direction === 'horizontal' ? 'flex-row gap-4' : 'flex-col gap-2', " ").concat(className)
  }, options.map(function (option, idx) {
    return /*#__PURE__*/_react["default"].createElement("label", {
      key: idx,
      className: "flex items-center gap-2 cursor-pointer ".concat(disabled ? 'opacity-50 cursor-not-allowed' : '')
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "checkbox",
      className: "h-4 w-4 rounded border-gray-300 focus:ring-2 ".concat(VARIANT_CLASSES[variant]),
      checked: selectedValues.includes(option.value),
      onChange: function onChange() {
        return handleCheckboxChange(option.value);
      },
      disabled: disabled
    }), /*#__PURE__*/_react["default"].createElement("span", null, option.label));
  }));
};
var _default = exports["default"] = CustomCheckBoxes;