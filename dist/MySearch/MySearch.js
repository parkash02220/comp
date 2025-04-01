"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MySearch;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _InputBase = _interopRequireDefault(require("@mui/material/InputBase"));
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
var _Clear = _interopRequireDefault(require("@mui/icons-material/Clear"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _excluded = ["value", "onChange", "onClear", "placeholder", "helperText", "error", "disabled", "searchIconColor", "clearIconColor", "onSearch", "showClearButton", "width", "minWidth", "fullWidth", "borderColor", "errorBorderColor", "borderRadius", "backgroundColor", "focusedBorderColor", "inputFontSize", "inputTextColor", "helperTextColor", "errorTextColor", "wrapperStyle", "iconStyle", "clearIconStyle", "helperTextStyle", "hoverBorderColor", "loading"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var SearchBox = (0, _styles.styled)(_Box["default"])(function (_ref) {
  var borderColor = _ref.borderColor,
    borderRadius = _ref.borderRadius,
    backgroundColor = _ref.backgroundColor,
    focusedBorderColor = _ref.focusedBorderColor,
    hoverBorderColor = _ref.hoverBorderColor,
    disabled = _ref.disabled;
  return {
    display: "flex",
    alignItems: "center",
    padding: "4px 8px",
    border: "1px solid ".concat(borderColor || "#ccc"),
    borderRadius: borderRadius || "4px",
    cursor: disabled ? "not-allowed" : "text",
    backgroundColor: backgroundColor || "#fff",
    transition: "border-color 0.3s ease",
    "&:focus-within": {
      borderColor: focusedBorderColor || "#1976d2"
    },
    "&:hover": {
      borderColor: hoverBorderColor || borderColor || "#aaa"
    }
  };
});
var StyledInputBase = (0, _styles.styled)(_InputBase["default"])(function (_ref2) {
  var inputFontSize = _ref2.inputFontSize,
    inputTextColor = _ref2.inputTextColor,
    disabled = _ref2.disabled;
  return {
    flex: 1,
    cursor: disabled ? "not-allowed" : "text",
    fontSize: inputFontSize || "16px",
    color: inputTextColor || "#000",
    "& input": {
      padding: "8px",
      outline: "none",
      cursor: disabled ? 'not-allowed' : 'auto'
    }
  };
});
function MySearch(_ref3) {
  var value = _ref3.value,
    onChange = _ref3.onChange,
    onClear = _ref3.onClear,
    _ref3$placeholder = _ref3.placeholder,
    placeholder = _ref3$placeholder === void 0 ? "Search…" : _ref3$placeholder,
    _ref3$helperText = _ref3.helperText,
    helperText = _ref3$helperText === void 0 ? "" : _ref3$helperText,
    _ref3$error = _ref3.error,
    error = _ref3$error === void 0 ? false : _ref3$error,
    _ref3$disabled = _ref3.disabled,
    disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,
    searchIconColor = _ref3.searchIconColor,
    clearIconColor = _ref3.clearIconColor,
    onSearch = _ref3.onSearch,
    _ref3$showClearButton = _ref3.showClearButton,
    showClearButton = _ref3$showClearButton === void 0 ? true : _ref3$showClearButton,
    width = _ref3.width,
    _ref3$minWidth = _ref3.minWidth,
    minWidth = _ref3$minWidth === void 0 ? "300px" : _ref3$minWidth,
    _ref3$fullWidth = _ref3.fullWidth,
    fullWidth = _ref3$fullWidth === void 0 ? false : _ref3$fullWidth,
    _ref3$borderColor = _ref3.borderColor,
    borderColor = _ref3$borderColor === void 0 ? "#ccc" : _ref3$borderColor,
    errorBorderColor = _ref3.errorBorderColor,
    _ref3$borderRadius = _ref3.borderRadius,
    borderRadius = _ref3$borderRadius === void 0 ? "4px" : _ref3$borderRadius,
    _ref3$backgroundColor = _ref3.backgroundColor,
    backgroundColor = _ref3$backgroundColor === void 0 ? "#fff" : _ref3$backgroundColor,
    _ref3$focusedBorderCo = _ref3.focusedBorderColor,
    focusedBorderColor = _ref3$focusedBorderCo === void 0 ? "#1976d2" : _ref3$focusedBorderCo,
    _ref3$inputFontSize = _ref3.inputFontSize,
    inputFontSize = _ref3$inputFontSize === void 0 ? "16px" : _ref3$inputFontSize,
    _ref3$inputTextColor = _ref3.inputTextColor,
    inputTextColor = _ref3$inputTextColor === void 0 ? "#000" : _ref3$inputTextColor,
    _ref3$helperTextColor = _ref3.helperTextColor,
    helperTextColor = _ref3$helperTextColor === void 0 ? "#666" : _ref3$helperTextColor,
    _ref3$errorTextColor = _ref3.errorTextColor,
    errorTextColor = _ref3$errorTextColor === void 0 ? "red" : _ref3$errorTextColor,
    _ref3$wrapperStyle = _ref3.wrapperStyle,
    wrapperStyle = _ref3$wrapperStyle === void 0 ? {} : _ref3$wrapperStyle,
    _ref3$iconStyle = _ref3.iconStyle,
    iconStyle = _ref3$iconStyle === void 0 ? {} : _ref3$iconStyle,
    _ref3$clearIconStyle = _ref3.clearIconStyle,
    clearIconStyle = _ref3$clearIconStyle === void 0 ? {} : _ref3$clearIconStyle,
    _ref3$helperTextStyle = _ref3.helperTextStyle,
    helperTextStyle = _ref3$helperTextStyle === void 0 ? {} : _ref3$helperTextStyle,
    hoverBorderColor = _ref3.hoverBorderColor,
    loading = _ref3.loading,
    props = _objectWithoutProperties(_ref3, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], _extends({
    sx: _objectSpread({
      width: fullWidth ? "100%" : width || "fit-content",
      minWidth: fullWidth ? "auto" : minWidth
    }, wrapperStyle)
  }, props), /*#__PURE__*/_react["default"].createElement(SearchBox, {
    borderColor: error ? errorBorderColor || 'red' : borderColor || 'inherit',
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
    focusedBorderColor: focusedBorderColor,
    sx: {
      cursor: disabled ? "not-allowed" : "text"
    },
    hoverBorderColor: hoverBorderColor
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    "aria-label": "search",
    disabled: disabled,
    onClick: onSearch,
    sx: _objectSpread({
      color: searchIconColor,
      cursor: disabled ? "not-allowed" : "pointer"
    }, iconStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Search["default"], null)), /*#__PURE__*/_react["default"].createElement(StyledInputBase, {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    inputProps: {
      "aria-label": "search",
      disabled: disabled
    },
    disabled: disabled,
    inputFontSize: inputFontSize,
    inputTextColor: inputTextColor
  }), showClearButton && value && !disabled && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    "aria-label": "clear",
    onClick: onClear,
    sx: _objectSpread({
      color: clearIconColor,
      cursor: disabled ? "not-allowed" : "pointer"
    }, clearIconStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Clear["default"], null)), loading && /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
    size: 20,
    sx: {
      mr: "8px"
    }
  })), error && helperText && /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: _objectSpread({
      marginTop: "4px",
      fontSize: "12px",
      color: error ? errorTextColor : helperTextColor
    }, helperTextStyle)
  }, helperText));
}
MySearch.defaultProps = {
  value: "",
  onClear: function onClear() {},
  placeholder: "Search…",
  helperText: "",
  error: false,
  disabled: false,
  searchIconColor: "black",
  //#666
  clearIconColor: "black",
  //#666
  showClearButton: true,
  borderColor: "black",
  //#ccc
  borderRadius: "10px",
  backgroundColor: "#fff",
  focusedBorderColor: "#1976d2",
  inputFontSize: "16px",
  inputTextColor: "#000",
  helperTextColor: "#666",
  errorTextColor: "red",
  wrapperStyle: {},
  iconStyle: {},
  clearIconStyle: {},
  helperTextStyle: {},
  loading: false
};