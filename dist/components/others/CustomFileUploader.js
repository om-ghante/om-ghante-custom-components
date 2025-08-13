"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _fi = require("react-icons/fi");
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
    buttonType = _ref$buttonType === void 0 ? "text" : _ref$buttonType,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
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
    className: className,
    style: _objectSpread({
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      padding: '1rem',
      border: '1px solid #e5e7eb',
      borderRadius: '0.75rem',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      backgroundColor: '#ffffff'
    }, style)
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#374151'
    }
  }, label), /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    accept: accept,
    onChange: handleFileChange,
    ref: fileInputRef,
    style: {
      display: 'none'
    }
  }), buttonType === "text" ? /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: handleButtonClick,
    style: {
      width: '100%',
      fontSize: '0.875rem',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      borderRadius: '0.5rem',
      fontWeight: '600',
      backgroundColor: '#3b82f6',
      color: '#ffffff',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      transition: 'all 0.2s ease-in-out',
      border: 'none',
      cursor: 'pointer'
    }
  }, "Browse File") : /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: handleButtonClick,
    style: {
      padding: '0.75rem',
      borderRadius: '0.5rem',
      backgroundColor: '#3b82f6',
      color: '#ffffff',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      transition: 'all 0.2s ease-in-out',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/_react["default"].createElement(_fi.FiUpload, {
    size: 20
  })), helperText && /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.75rem',
      color: '#6b7280'
    }
  }, helperText), error && /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: '0.75rem',
      color: '#ef4444',
      fontWeight: '500'
    }
  }, errorText || error), showPreview && file && file.type.startsWith("image/") && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '0.75rem',
      padding: '0.5rem',
      border: '1px solid #e5e7eb',
      // Using a light gray color
      borderRadius: '0.5rem',
      backgroundColor: '#f9fafb',
      boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: URL.createObjectURL(file),
    alt: "Preview",
    style: {
      width: '8rem',
      height: '8rem',
      objectFit: 'cover',
      borderRadius: '0.375rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block'
    }
  })));
};
var _default = exports["default"] = CustomFileUploader;