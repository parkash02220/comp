"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyButton;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
require("./MyButton.style.css");
var _excluded = ["children", "color", "variant", "size", "fullWidth", "disabled", "startIcon", "endIcon", "onClick", "href", "type", "loading", "loadingText", "fontSize", "width", "minWidth", "borderRadius", "textTransform", "padding", "margin", "boxShadow", "loadingIndicator", "className", "hoverBgColor", "activeBgColor", "backgroundColor", "fontWeight", "disabledBgColor", "disabledTextColor", "iconOnly", "sx"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function MyButton(_ref) {
  var children = _ref.children,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "white" : _ref$color,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "contained" : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size,
    fullWidth = _ref.fullWidth,
    disabled = _ref.disabled,
    startIcon = _ref.startIcon,
    endIcon = _ref.endIcon,
    onClick = _ref.onClick,
    href = _ref.href,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "button" : _ref$type,
    loading = _ref.loading,
    loadingText = _ref.loadingText,
    fontSize = _ref.fontSize,
    width = _ref.width,
    _ref$minWidth = _ref.minWidth,
    minWidth = _ref$minWidth === void 0 ? "200px" : _ref$minWidth,
    _ref$borderRadius = _ref.borderRadius,
    borderRadius = _ref$borderRadius === void 0 ? "10px" : _ref$borderRadius,
    _ref$textTransform = _ref.textTransform,
    textTransform = _ref$textTransform === void 0 ? "none" : _ref$textTransform,
    padding = _ref.padding,
    _ref$margin = _ref.margin,
    margin = _ref$margin === void 0 ? "0" : _ref$margin,
    _ref$boxShadow = _ref.boxShadow,
    boxShadow = _ref$boxShadow === void 0 ? "none" : _ref$boxShadow,
    loadingIndicator = _ref.loadingIndicator,
    className = _ref.className,
    _ref$hoverBgColor = _ref.hoverBgColor,
    hoverBgColor = _ref$hoverBgColor === void 0 ? "rgba(28,37,46,0.8)" : _ref$hoverBgColor,
    activeBgColor = _ref.activeBgColor,
    backgroundColor = _ref.backgroundColor,
    _ref$fontWeight = _ref.fontWeight,
    fontWeight = _ref$fontWeight === void 0 ? 700 : _ref$fontWeight,
    disabledBgColor = _ref.disabledBgColor,
    disabledTextColor = _ref.disabledTextColor,
    _ref$iconOnly = _ref.iconOnly,
    iconOnly = _ref$iconOnly === void 0 ? false : _ref$iconOnly,
    sx = _ref.sx,
    props = _objectWithoutProperties(_ref, _excluded);
  var sizeStyles = {
    small: {
      padding: iconOnly ? "6px" : "4px 8px",
      fontSize: "12px"
    },
    medium: {
      padding: iconOnly ? "10px" : "8px 16px",
      fontSize: "16px"
    },
    large: {
      padding: iconOnly ? "14px" : "12px 20px",
      fontSize: "18px"
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    width: fullWidth ? "100%" : "fit-content",
    sx: {
      cursor: disabled || loading ? "not-allowed" : "auto"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, _extends({
    className: "myButton ".concat(className || ""),
    variant: variant,
    size: size,
    fullWidth: fullWidth,
    disabled: disabled || loading,
    startIcon: iconOnly ? null : !loading ? startIcon : loadingIndicator ? /*#__PURE__*/_react["default"].createElement("img", {
      src: loadingIndicator,
      alt: "loading indicator",
      width: 20,
      height: 20,
      className: "spin"
    }) : /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
      size: 20,
      color: "inherit",
      sx: {
        mr: "8px"
      }
    }),
    endIcon: iconOnly ? null : !loading ? endIcon : null,
    onClick: onClick,
    href: href,
    type: type,
    sx: _objectSpread(_objectSpread({}, sizeStyles[size]), {}, {
      width: iconOnly ? "auto" : width,
      minWidth: iconOnly ? "auto" : minWidth,
      fontSize: fontSize,
      borderRadius: borderRadius,
      textTransform: textTransform,
      padding: padding,
      margin: margin,
      boxShadow: boxShadow,
      color: variant === "contained" ? "#ffffff" : color,
      fontWeight: fontWeight,
      backgroundColor: variant === "contained" ? color : backgroundColor || 'inherit',
      border: variant === "outlined" ? "1px solid ".concat(color) : "none",
      "&:hover": {
        backgroundColor: disabled || loading ? undefined : hoverBgColor
      },
      "&:active": {
        backgroundColor: disabled || loading ? undefined : activeBgColor
      },
      "&.Mui-disabled": {
        backgroundColor: variant === "contained" ? color : disabledBgColor || backgroundColor || 'inherit',
        color: variant === "contained" ? "#ffffff" : disabledTextColor || color,
        opacity: disabled ? "0.5" : "1"
      }
    }, sx)
  }, props), iconOnly && !loading ? startIcon || endIcon : loading ? loadingText || "Loading..." : children));
}
MyButton.defaultProps = {
  color: "white",
  variant: "contained",
  size: "medium",
  type: "button",
  borderRadius: "10px",
  textTransform: "none",
  margin: "0",
  // backgroundColor: "",
  fontWeight: 700,
  hoverBgColor: "rgba(28,37,46,0.8)",
  iconOnly: false
};