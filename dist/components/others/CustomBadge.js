"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/components/others/CustomBadge.jsx

/**
 * CustomBadge Component
 * @param {string} label - Text to display inside the badge
 * @param {string} color - Background color (Tailwind class)
 * @param {string} textColor - Text color (Tailwind class)
 * @param {string} size - Size of the badge (sm, md, lg)
 * @param {boolean} rounded - Whether the badge has rounded corners
 * @param {string} className - Additional custom classes
 */
var CustomBadge = function CustomBadge(_ref) {
  var label = _ref.label,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "bg-blue-500" : _ref$color,
    _ref$textColor = _ref.textColor,
    textColor = _ref$textColor === void 0 ? "text-white" : _ref$textColor,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    _ref$rounded = _ref.rounded,
    rounded = _ref$rounded === void 0 ? true : _ref$rounded,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  var sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5"
  };
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(color, " ").concat(textColor, " ").concat(sizeClasses[size], " ").concat(rounded ? "rounded-full" : "rounded", " font-medium inline-block ").concat(className)
  }, label);
};
CustomBadge.propTypes = {
  label: _propTypes["default"].string.isRequired,
  color: _propTypes["default"].string,
  textColor: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(["sm", "md", "lg"]),
  rounded: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
var _default = exports["default"] = CustomBadge;