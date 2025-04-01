"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MySwitch;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _FormGroup = _interopRequireDefault(require("@mui/material/FormGroup"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _Switch = _interopRequireDefault(require("@mui/material/Switch"));
var _FormHelperText = _interopRequireDefault(require("@mui/material/FormHelperText"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
require("./MySwitch.style.css");
var _excluded = ["checked", "onChange", "label", "labelPlacement", "disabled", "size", "helperText", "error", "switchStyle", "labelStyle", "boxStyle", "formGroupStyle", "className", "trackBgColor", "checkedTrackBgColor", "fontSize", "fontWeight", "labelColor", "required", "requiredColor", "loading", "startIcon", "endIcon", "loadingIndicator"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var IOSSwitch = (0, _styles.styled)(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Switch["default"], _extends({
    focusVisibleClassName: ".Mui-focusVisible",
    disableRipple: true
  }, props));
})(function (_ref) {
  var trackbgcolor = _ref.trackbgcolor,
    checkedtrackbgcolor = _ref.checkedtrackbgcolor,
    size = _ref.size,
    disabled = _ref.disabled;
  return {
    width: size === "medium" ? 50 : 40,
    height: size === "medium" ? 26 : 22,
    cursor: disabled ? "not-allowed" : "pointer",
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: size === "medium" ? "translateX(23px)" : "translateX(18px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: checkedtrackbgcolor,
          opacity: 1,
          border: 0
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5
        }
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "1px solid #fff"
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: "#E9E9EA"
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7
      }
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: size === "medium" ? 22 : 16,
      height: size === "medium" ? 22 : 16
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: trackbgcolor,
      opacity: 1,
      transition: "background-color 500ms"
    }
  };
});
function MySwitch(_ref2) {
  var checked = _ref2.checked,
    onChange = _ref2.onChange,
    _ref2$label = _ref2.label,
    label = _ref2$label === void 0 ? "Switch" : _ref2$label,
    _ref2$labelPlacement = _ref2.labelPlacement,
    labelPlacement = _ref2$labelPlacement === void 0 ? "end" : _ref2$labelPlacement,
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? "medium" : _ref2$size,
    _ref2$helperText = _ref2.helperText,
    helperText = _ref2$helperText === void 0 ? "" : _ref2$helperText,
    _ref2$error = _ref2.error,
    error = _ref2$error === void 0 ? false : _ref2$error,
    _ref2$switchStyle = _ref2.switchStyle,
    switchStyle = _ref2$switchStyle === void 0 ? {} : _ref2$switchStyle,
    _ref2$labelStyle = _ref2.labelStyle,
    labelStyle = _ref2$labelStyle === void 0 ? {} : _ref2$labelStyle,
    _ref2$boxStyle = _ref2.boxStyle,
    boxStyle = _ref2$boxStyle === void 0 ? {} : _ref2$boxStyle,
    _ref2$formGroupStyle = _ref2.formGroupStyle,
    formGroupStyle = _ref2$formGroupStyle === void 0 ? {} : _ref2$formGroupStyle,
    _ref2$className = _ref2.className,
    className = _ref2$className === void 0 ? "" : _ref2$className,
    _ref2$trackBgColor = _ref2.trackBgColor,
    trackBgColor = _ref2$trackBgColor === void 0 ? "#E9E9EA" : _ref2$trackBgColor,
    _ref2$checkedTrackBgC = _ref2.checkedTrackBgColor,
    checkedTrackBgColor = _ref2$checkedTrackBgC === void 0 ? "rgb(0, 100, 0,0.6)" : _ref2$checkedTrackBgC,
    _ref2$fontSize = _ref2.fontSize,
    fontSize = _ref2$fontSize === void 0 ? "16px" : _ref2$fontSize,
    _ref2$fontWeight = _ref2.fontWeight,
    fontWeight = _ref2$fontWeight === void 0 ? 400 : _ref2$fontWeight,
    _ref2$labelColor = _ref2.labelColor,
    labelColor = _ref2$labelColor === void 0 ? "black" : _ref2$labelColor,
    _ref2$required = _ref2.required,
    required = _ref2$required === void 0 ? false : _ref2$required,
    _ref2$requiredColor = _ref2.requiredColor,
    requiredColor = _ref2$requiredColor === void 0 ? "red" : _ref2$requiredColor,
    _ref2$loading = _ref2.loading,
    loading = _ref2$loading === void 0 ? false : _ref2$loading,
    startIcon = _ref2.startIcon,
    endIcon = _ref2.endIcon,
    loadingIndicator = _ref2.loadingIndicator,
    props = _objectWithoutProperties(_ref2, _excluded);
  console.log("::loading indicator", loadingIndicator);
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: _objectSpread({
      width: "fit-content"
    }, boxStyle),
    className: className
  }, /*#__PURE__*/_react["default"].createElement(_FormGroup["default"], {
    sx: _objectSpread({}, formGroupStyle)
  }, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    control: /*#__PURE__*/_react["default"].createElement(IOSSwitch, _extends({
      checked: checked,
      onChange: onChange,
      disabled: disabled,
      size: size,
      checkedtrackbgcolor: checkedTrackBgColor,
      trackbgcolor: trackBgColor,
      sx: _objectSpread({}, switchStyle)
    }, props)),
    label: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: 'flex'
    }, loading ? loadingIndicator ? /*#__PURE__*/_react["default"].createElement("img", {
      src: loadingIndicator,
      alt: "loading indicator",
      width: 20,
      height: 20,
      className: "spin",
      style: {
        marginRight: "8px"
      }
    }) : /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
      size: 20,
      color: "inherit",
      sx: {
        mr: "8px"
      }
    }) : null, startIcon && !loading && /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        marginRight: "8px"
      }
    }, startIcon), label, endIcon && /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        marginLeft: "8px"
      }
    }, endIcon), required && /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        color: requiredColor,
        fontSize: "16px",
        position: "relative",
        top: "-4px"
      }
    }, " ", "*"))),
    labelPlacement: labelPlacement,
    sx: {
      gap: "16px",
      "& .MuiFormControlLabel-label": _objectSpread(_objectSpread({
        fontSize: fontSize,
        fontWeight: fontWeight
      }, labelStyle), {}, {
        color: error ? "red" : disabled ? "#a9a9a9" : labelColor || "inherit"
      })
    }
  }), error && helperText && /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], {
    sx: {
      color: "red"
    }
  }, helperText)));
}
MySwitch.defaultProps = {
  label: "Switch",
  labelPlacement: "end",
  size: "medium",
  disabled: false,
  helperText: "",
  error: false,
  switchStyle: {},
  labelStyle: {},
  boxStyle: {},
  formGroupStyle: {},
  trackBgColor: "#E9E9EA",
  checkedTrackBgColor: "rgb(0, 100, 0,0.6)",
  fontSize: "16px",
  fontWeight: 500,
  labelColor: "black",
  required: false,
  requiredColor: "red",
  loading: false,
  loadingIndicator: null
};