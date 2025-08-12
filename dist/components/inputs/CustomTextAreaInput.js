"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var CustomTextAreaInput = function CustomTextAreaInput(_ref) {
  var label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    placeholder = _ref.placeholder,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? 4 : _ref$rows,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-4"
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-gray-700 text-sm font-bold mb-2"
  }, label), /*#__PURE__*/_react["default"].createElement("textarea", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ".concat(className),
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows
  }));
};
var _default = exports["default"] = CustomTextAreaInput;