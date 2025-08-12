"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/components/inputs/CustomRadioButtons.jsx

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
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "blue" : _ref$color,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  var SIZE_CLASSES = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  // Predefined Tailwind color classes (so they're not purged)
  var COLOR_CLASSES = {
    blue: "checked:bg-blue-600 focus:ring-blue-500",
    red: "checked:bg-red-600 focus:ring-red-500",
    green: "checked:bg-green-600 focus:ring-green-500",
    yellow: "checked:bg-yellow-600 focus:ring-yellow-500",
    purple: "checked:bg-purple-600 focus:ring-purple-500",
    pink: "checked:bg-pink-600 focus:ring-pink-500",
    indigo: "checked:bg-indigo-600 focus:ring-indigo-500",
    gray: "checked:bg-gray-600 focus:ring-gray-500"
  };
  var handleChange = function handleChange(value) {
    if (onChange) {
      onChange(value);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col gap-2 ".concat(className)
  }, label && /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-medium text-gray-700"
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex ".concat(direction === "column" ? "flex-col gap-2" : "flex-row gap-4")
  }, options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("label", {
      key: option.value,
      className: "flex items-center gap-2 cursor-pointer ".concat(disabled ? "opacity-50 cursor-not-allowed" : "")
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "radio",
      name: name,
      value: option.value,
      checked: selectedValue === option.value,
      onChange: function onChange() {
        return handleChange(option.value);
      },
      disabled: disabled,
      className: "appearance-none rounded-full border border-gray-300 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 ".concat(COLOR_CLASSES[color], " ").concat(SIZE_CLASSES[size])
    }), /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-black"
    }, option.label));
  })));
};
var _default = exports["default"] = CustomRadioButtons;