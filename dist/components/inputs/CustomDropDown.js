"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// CustomDropDown.jsx

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
    className = _ref$className === void 0 ? "" : _ref$className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col gap-1 ".concat(fullWidth ? "w-full" : "w-fit")
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: "text-sm font-medium text-white"
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("select", {
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    disabled: disabled,
    className: "\n            appearance-none px-4 py-2 pr-10 rounded-lg border \n            focus:outline-none focus:ring-2 focus:ring-blue-500 \n            text-sm transition-all\n            ".concat(disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white", " \n            ").concat(error ? "border-red-500" : "border-gray-300", " \n            ").concat(fullWidth ? "w-full" : "w-fit", " \n            ").concat(className, "\n          ")
  }, placeholder && /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, placeholder), options.map(function (opt, index) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: index,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/_react["default"].createElement(_fa.FaChevronDown, {
    className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
  })), error && /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-xs text-red-500"
  }, error));
};
var _default = exports["default"] = CustomDropDown;