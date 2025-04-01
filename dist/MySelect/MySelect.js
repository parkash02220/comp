"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MySelect;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _material = require("@mui/material");
var _theming = require("storybook/internal/theming");
var _excluded = ["value", "onChange", "label", "options", "fullWidth", "disabled", "size", "variant", "borderRadius", "minWidth", "padding", "labelFontSize", "selectFontSize", "menuItemFontSize", "boxShadow", "placeholder", "loading", "helperText", "error", "menuBackgroundColor", "menuHoverColor", "borderColor", "labelColor", "className", "listBoxClasssName", "optionItemClassName", "hoverBorderColor", "color", "required", "requiredColor", "sx"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function MySelect(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? "Select" : _ref$label,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    fullWidth = _ref.fullWidth,
    disabled = _ref.disabled,
    size = _ref.size,
    variant = _ref.variant,
    _ref$borderRadius = _ref.borderRadius,
    borderRadius = _ref$borderRadius === void 0 ? "10px" : _ref$borderRadius,
    _ref$minWidth = _ref.minWidth,
    minWidth = _ref$minWidth === void 0 ? "300px" : _ref$minWidth,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? "0px" : _ref$padding,
    _ref$labelFontSize = _ref.labelFontSize,
    labelFontSize = _ref$labelFontSize === void 0 ? "16px" : _ref$labelFontSize,
    _ref$selectFontSize = _ref.selectFontSize,
    selectFontSize = _ref$selectFontSize === void 0 ? "14px" : _ref$selectFontSize,
    _ref$menuItemFontSize = _ref.menuItemFontSize,
    menuItemFontSize = _ref$menuItemFontSize === void 0 ? "14px" : _ref$menuItemFontSize,
    boxShadow = _ref.boxShadow,
    placeholder = _ref.placeholder,
    loading = _ref.loading,
    _ref$helperText = _ref.helperText,
    helperText = _ref$helperText === void 0 ? "" : _ref$helperText,
    error = _ref.error,
    menuBackgroundColor = _ref.menuBackgroundColor,
    menuHoverColor = _ref.menuHoverColor,
    _ref$borderColor = _ref.borderColor,
    borderColor = _ref$borderColor === void 0 ? "black" : _ref$borderColor,
    _ref$labelColor = _ref.labelColor,
    labelColor = _ref$labelColor === void 0 ? "black" : _ref$labelColor,
    className = _ref.className,
    listBoxClasssName = _ref.listBoxClasssName,
    optionItemClassName = _ref.optionItemClassName,
    hoverBorderColor = _ref.hoverBorderColor,
    color = _ref.color,
    required = _ref.required,
    requiredColor = _ref.requiredColor,
    sx = _ref.sx,
    props = _objectWithoutProperties(_ref, _excluded);
  var customStyleForSelect = _objectSpread({
    minWidth: minWidth,
    padding: padding,
    cursor: disabled ? "not-allowed" : "default",
    "& .MuiOutlinedInput-root": {
      cursor: disabled ? "not-allowed" : "text"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: error ? "red" : "rgba(0, 0, 0, 0.23)",
      border: error ? "1px solid red" : "1px solid ".concat(borderColor || rgba(0, 0, 0, 0.23))
    },
    "& .MuiSelect-select": {
      fontSize: selectFontSize,
      cursor: disabled ? "not-allowed" : "default",
      color: color || labelColor
    }
  }, sx);
  var menuItems = _react["default"].useMemo(function () {
    return options.map(function (option) {
      return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
        key: option.value,
        value: option.value,
        sx: {
          fontSize: menuItemFontSize
        },
        className: "mySelect__option ".concat(optionItemClassName)
      }, option.label);
    });
  }, [options, menuItemFontSize, optionItemClassName]);
  var renderMenuItems = function renderMenuItems() {
    return menuItems;
  };
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    sx: {
      minWidth: minWidth
    }
  }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: fullWidth,
    disabled: disabled,
    error: error,
    variant: variant,
    size: size,
    sx: {
      borderRadius: borderRadius,
      boxShadow: boxShadow,
      "& .MuiOutlinedInput-root": {
        borderRadius: borderRadius,
        borderColor: error ? "red" : borderColor,
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "1px solid ".concat(error ? "red" : hoverBorderColor || borderColor)
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "1px solid ".concat(error ? "red" : borderColor)
        }
      },
      "& .MuiInputLabel-root": {
        fontSize: labelFontSize,
        color: error ? "red" : disabled ? "#a9a9a9" : labelColor
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: error ? "red" : labelColor
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: error ? "red" : borderColor
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    id: "custom-select-label"
  }, required ? /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: 'flex',
    gap: '2px'
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    fontSize: labelFontSize,
    color: labelColor
  }, label), " ", /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    mt: '-4px',
    color: requiredColor || labelColor
  }, "*")) : /*#__PURE__*/_react["default"].createElement(_Box["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    fontSize: labelFontSize,
    color: labelColor
  }, label))), /*#__PURE__*/_react["default"].createElement(_Select["default"], _extends({
    labelId: "custom-select-label",
    id: "custom-select",
    className: "mySelect ".concat(className),
    value: value,
    onChange: onChange,
    label: label,
    sx: customStyleForSelect,
    endAdornment: loading ? /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
      position: "end"
    }, /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
      size: 16,
      sx: {
        mr: 4
      }
    })) : null,
    MenuProps: {
      PaperProps: {
        className: "mySelect__listBox ".concat(listBoxClasssName),
        sx: {
          borderRadius: borderRadius,
          bgcolor: menuBackgroundColor || "white",
          "& .MuiMenuItem-root:hover": {
            bgcolor: menuHoverColor || ""
          }
        }
      }
    }
  }, props), placeholder && /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "",
    disabled: true
  }, placeholder), loading ? /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    disabled: true
  }, /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
    size: 16,
    sx: {
      marginRight: "8px"
    }
  }), " ", "Loading...") : renderMenuItems()), error && helperText && /*#__PURE__*/_react["default"].createElement(_material.FormHelperText, null, helperText)));
}
MySelect.defaultProps = {
  label: "Select",
  options: [],
  size: "medium",
  variant: "outlined",
  borderRadius: "8px",
  minWidth: 300,
  padding: "8px",
  labelFontSize: "16px",
  selectFontSize: "14px",
  menuItemFontSize: "14px",
  boxShadow: "none",
  helperText: "Please select valid input.",
  borderColor: "black",
  labelColor: "black",
  required: false
};