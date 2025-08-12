"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _fi = require("react-icons/fi");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CustomFileUploader = function CustomFileUploader(_ref) {
  var label = _ref.label,
    onFileSelect = _ref.onFileSelect,
    _ref$accept = _ref.accept,
    accept = _ref$accept === void 0 ? "*" : _ref$accept,
    _ref$maxSize = _ref.maxSize,
    maxSize = _ref$maxSize === void 0 ? 5 * 1024 * 1024 : _ref$maxSize,
    _ref$showPreview = _ref.showPreview,
    showPreview = _ref$showPreview === void 0 ? true : _ref$showPreview,
    helperText = _ref.helperText,
    errorText = _ref.errorText,
    _ref$buttonType = _ref.buttonType,
    buttonType = _ref$buttonType === void 0 ? "text" : _ref$buttonType;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    file = _useState2[0],
    setFile = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var fileInputRef = (0, _react.useRef)(null);
  var handleFileChange = function handleFileChange(event) {
    var selectedFile = event.target.files[0];
    if (!selectedFile) return;
    if (selectedFile.size > maxSize) {
      setError("File size should be less than ".concat(Math.round(maxSize / 1024 / 1024), " MB"));
      setFile(null);
      return;
    }
    if (accept !== "*" && !selectedFile.type.match(accept.replace("*", ".*"))) {
      setError("Invalid file type");
      setFile(null);
      return;
    }
    setError("");
    setFile(selectedFile);
    if (onFileSelect) onFileSelect(selectedFile);
  };
  var handleButtonClick = function handleButtonClick() {
    fileInputRef.current.click();
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col gap-3 p-4 border border-gray-200 rounded-xl shadow-sm bg-white"
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: "text-sm font-semibold text-gray-700"
  }, label), /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    accept: accept,
    onChange: handleFileChange,
    ref: fileInputRef,
    className: "hidden"
  }), buttonType === "text" ? /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: handleButtonClick,
    className: "w-full text-sm py-2 px-4 rounded-lg  font-semibold bg-blue-500 text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
  }, "Browse File") : /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: handleButtonClick,
    className: "p-3 rounded-lg bg-blue-500 text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 flex items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement(_fi.FiUpload, {
    size: 20
  })), helperText && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xs text-gray-500"
  }, helperText), error && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xs text-red-500 font-medium"
  }, errorText || error), showPreview && file && file.type.startsWith("image/") && /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-3 p-2 border rounded-lg bg-gray-50 shadow-inner"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: URL.createObjectURL(file),
    alt: "Preview",
    className: "w-32 h-32 object-cover rounded-md mx-auto"
  })));
};
var _default = exports["default"] = CustomFileUploader;