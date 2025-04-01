"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _excluded = ["value", "onChange", "label", "placeholder", "variant", "fullWidth", "width", "minWidth", "size", "disabled", "loading", "error", "helperText", "type", "multiline", "rows", "maxRows", "minRows", "InputProps", "InputLabelProps", "sx", "borderRadius", "boxShadow", "borderColor", "labelFontSize", "inputFontSize", "labelColor", "errorBorderColor", "helperTextFontSize", "padding", "customEndAdornment", "customStartAdornment", "className", "customLabelSx", "required", "requiredColor", "shrink", "hoverBorderColor", "autoComplete"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var MyTextField = function MyTextField(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? "Enter text" : _ref$label,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "outlined" : _ref$variant,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    width = _ref.width,
    _ref$minWidth = _ref.minWidth,
    minWidth = _ref$minWidth === void 0 ? "300px" : _ref$minWidth,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "medium" : _ref$size,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    _ref$helperText = _ref.helperText,
    helperText = _ref$helperText === void 0 ? "" : _ref$helperText,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "text" : _ref$type,
    _ref$multiline = _ref.multiline,
    multiline = _ref$multiline === void 0 ? false : _ref$multiline,
    rows = _ref.rows,
    maxRows = _ref.maxRows,
    minRows = _ref.minRows,
    InputProps = _ref.InputProps,
    InputLabelProps = _ref.InputLabelProps,
    _ref$sx = _ref.sx,
    sx = _ref$sx === void 0 ? {} : _ref$sx,
    _ref$borderRadius = _ref.borderRadius,
    borderRadius = _ref$borderRadius === void 0 ? "8px" : _ref$borderRadius,
    _ref$boxShadow = _ref.boxShadow,
    boxShadow = _ref$boxShadow === void 0 ? "none" : _ref$boxShadow,
    _ref$borderColor = _ref.borderColor,
    borderColor = _ref$borderColor === void 0 ? "black" : _ref$borderColor,
    _ref$labelFontSize = _ref.labelFontSize,
    labelFontSize = _ref$labelFontSize === void 0 ? "14px" : _ref$labelFontSize,
    _ref$inputFontSize = _ref.inputFontSize,
    inputFontSize = _ref$inputFontSize === void 0 ? "14px" : _ref$inputFontSize,
    _ref$labelColor = _ref.labelColor,
    labelColor = _ref$labelColor === void 0 ? "black" : _ref$labelColor,
    _ref$errorBorderColor = _ref.errorBorderColor,
    errorBorderColor = _ref$errorBorderColor === void 0 ? "red" : _ref$errorBorderColor,
    _ref$helperTextFontSi = _ref.helperTextFontSize,
    helperTextFontSize = _ref$helperTextFontSi === void 0 ? "12px" : _ref$helperTextFontSi,
    padding = _ref.padding,
    customEndAdornment = _ref.customEndAdornment,
    customStartAdornment = _ref.customStartAdornment,
    className = _ref.className,
    customLabelSx = _ref.customLabelSx,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$requiredColor = _ref.requiredColor,
    requiredColor = _ref$requiredColor === void 0 ? "black" : _ref$requiredColor,
    shrink = _ref.shrink,
    hoverBorderColor = _ref.hoverBorderColor,
    autoComplete = _ref.autoComplete,
    props = _objectWithoutProperties(_ref, _excluded);
  var shrinkTypes = ["text", "number", "password", "email", "tel", "url", "search"];
  var shouldShrink = shrinkTypes.includes(type) ? undefined : true;
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      width: fullWidth ? "100%" : width || "fit-content"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.TextField, _extends({
    value: value,
    label: label,
    required: required,
    onChange: onChange,
    placeholder: placeholder,
    variant: variant,
    fullWidth: fullWidth,
    size: size,
    disabled: disabled,
    error: error,
    type: type,
    multiline: multiline,
    rows: rows,
    maxRows: maxRows,
    minRows: minRows,
    autoComplete: autoComplete,
    helperText: error && helperText,
    InputProps: _objectSpread(_objectSpread({}, InputProps), {}, {
      style: {
        borderRadius: borderRadius,
        padding: padding,
        fontSize: inputFontSize
      },
      startAdornment: customStartAdornment,
      endAdornment: loading ? /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
        size: 20,
        sx: {
          marginRight: "10px"
        }
      }) : customEndAdornment
    }),
    InputLabelProps: _objectSpread(_objectSpread({}, InputLabelProps), {}, {
      shrink: shrink || shouldShrink,
      style: {
        fontSize: labelFontSize,
        color: error ? errorBorderColor : disabled ? "#a9a9a9" : labelColor
      }
    }),
    sx: _objectSpread(_objectSpread({
      width: width,
      minWidth: minWidth
    }, sx), {}, {
      "& .MuiInputLabel-asterisk": {
        color: requiredColor
      },
      "& .MuiOutlinedInput-root": {
        borderRadius: borderRadius,
        boxShadow: boxShadow,
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: error ? errorBorderColor : borderColor
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: error ? errorBorderColor : hoverBorderColor || borderColor
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: error ? errorBorderColor : borderColor
        }
      },
      "& .MuiInputLabel-root": {
        color: disabled ? "#a9a9a9" : labelColor
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: error ? errorBorderColor : labelColor
      },
      "& .MuiFormHelperText-root": {
        fontSize: helperTextFontSize,
        color: error ? errorBorderColor : "#a9a9a9"
      },
      "& .Mui-disabled": {
        cursor: "not-allowed !important"
      }
    }),
    className: "myTextField ".concat(className)
  }, props)));
};
MyTextField.defaultProps = {
  label: "Enter text",
  variant: "outlined",
  fullWidth: false,
  size: "medium",
  type: "text",
  borderRadius: "8px",
  boxShadow: "none",
  borderColor: "black",
  labelFontSize: "14px",
  inputFontSize: "14px",
  labelColor: "black",
  errorBorderColor: "red",
  helperTextFontSize: "12px",
  requiredColor: "black",
  shrink: "",
  minWidth: "300px"
};
var _default = exports["default"] = MyTextField;