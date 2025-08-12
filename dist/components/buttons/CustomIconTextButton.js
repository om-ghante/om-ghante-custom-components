"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var VARIANT_CLASSES = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
  outline: 'border border-gray-500 text-gray-300 hover:bg-gray-700'
};
var SIZE_CLASSES = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg'
};
var CustomIconTextButton = function CustomIconTextButton(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'button' : _ref$type,
    _ref$text = _ref.text,
    text = _ref$text === void 0 ? 'Click Me' : _ref$text,
    onClick = _ref.onClick,
    _ref$icon = _ref.icon,
    Icon = _ref$icon === void 0 ? null : _ref$icon,
    _ref$iconPosition = _ref.iconPosition,
    iconPosition = _ref$iconPosition === void 0 ? 'left' : _ref$iconPosition,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: type,
    onClick: onClick,
    disabled: disabled || loading,
    className: "\n        flex items-center justify-center gap-2 rounded-lg font-medium transition-all\n        ".concat(VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary, "\n        ").concat(SIZE_CLASSES[size] || SIZE_CLASSES.md, "\n        ").concat(fullWidth ? 'w-full' : 'w-fit', "\n        ").concat(disabled ? 'opacity-50 cursor-not-allowed' : '', "\n        ").concat(className, "\n      ")
  }, loading ? /*#__PURE__*/_react["default"].createElement(_fa.FaSpinner, {
    className: "animate-spin w-4 h-4"
  }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, iconPosition === 'left' && Icon && /*#__PURE__*/_react["default"].createElement(Icon, {
    className: "w-4 h-4"
  }), text, iconPosition === 'right' && Icon && /*#__PURE__*/_react["default"].createElement(Icon, {
    className: "w-4 h-4"
  })));
};
var _default = exports["default"] = CustomIconTextButton;