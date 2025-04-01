"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyAutoComplete;
var React = _interopRequireWildcard(require("react"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _material = require("@mui/material");
var _excluded = ["disablePortal", "fullWidth", "width", "borderRadius", "placeholder", "labelColor", "borderColor", "optionBoxBorderRadius", "optionBoxPadding", "fontSize", "optionBoxFontSize", "value", "onChange", "onInputChange", "error", "helperText", "disabled", "loading", "loadingText", "options", "noOptionsText", "renderOption", "getOptionLabel", "className", "listBoxClassName", "label", "shrink", "hoverOptionBgColor", "minWidth", "hoverBorderColor", "sx", "multiple", "clearIcon", "renderTags", "required", "requiredColor", "textFieldSx"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function MyAutoComplete(_ref) {
  var disablePortal = _ref.disablePortal,
    fullWidth = _ref.fullWidth,
    width = _ref.width,
    borderRadius = _ref.borderRadius,
    placeholder = _ref.placeholder,
    labelColor = _ref.labelColor,
    borderColor = _ref.borderColor,
    optionBoxBorderRadius = _ref.optionBoxBorderRadius,
    optionBoxPadding = _ref.optionBoxPadding,
    fontSize = _ref.fontSize,
    optionBoxFontSize = _ref.optionBoxFontSize,
    value = _ref.value,
    _onChange = _ref.onChange,
    _onInputChange = _ref.onInputChange,
    error = _ref.error,
    helperText = _ref.helperText,
    disabled = _ref.disabled,
    loading = _ref.loading,
    loadingText = _ref.loadingText,
    options = _ref.options,
    noOptionsText = _ref.noOptionsText,
    renderOption = _ref.renderOption,
    _getOptionLabel = _ref.getOptionLabel,
    className = _ref.className,
    listBoxClassName = _ref.listBoxClassName,
    label = _ref.label,
    shrink = _ref.shrink,
    hoverOptionBgColor = _ref.hoverOptionBgColor,
    minWidth = _ref.minWidth,
    hoverBorderColor = _ref.hoverBorderColor,
    sx = _ref.sx,
    multiple = _ref.multiple,
    clearIcon = _ref.clearIcon,
    renderTags = _ref.renderTags,
    required = _ref.required,
    requiredColor = _ref.requiredColor,
    textFieldSx = _ref.textFieldSx,
    props = _objectWithoutProperties(_ref, _excluded);
  var customStyleForAutoComplete = _objectSpread(_defineProperty({
    width: fullWidth ? "100%" : width || "auto",
    minWidth: minWidth,
    "& .MuiOutlinedInput-root": {
      borderRadius: borderRadius,
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: error ? "red" : hoverBorderColor || borderColor || 'black'
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: error ? "red" : borderColor
      }
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid ".concat(borderColor || "black")
    },
    "& .MuiInputBase-input": {
      fontSize: fontSize,
      color: disabled ? "#a9a9a9" : "inherit",
      cursor: disabled ? "not-allowed" : "text"
    },
    "& .MuiInputLabel-root": {
      color: error ? "red" : disabled ? "#a9a9a9" : labelColor
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: error ? "red" : labelColor
    }
  }, "& .MuiInputLabel-root.Mui-focused", {
    color: error ? "red" : labelColor
  }), sx);
  return /*#__PURE__*/React.createElement(_material.Box, {
    width: fullWidth ? "100%" : "fit-content"
  }, /*#__PURE__*/React.createElement(_Autocomplete["default"], _extends({
    className: "myAutoComplete ".concat(className || ""),
    disablePortal: disablePortal,
    multiple: multiple,
    clearIcon: clearIcon,
    options: loading ? [] : Array.isArray(options) ? options : [],
    noOptionsText: loading ? loadingText || "loading..." : noOptionsText || "No options",
    disabled: disabled,
    value: multiple ? value || [] : value,
    onChange: function onChange(event, newValue) {
      if (_onChange) {
        _onChange(event, newValue);
      }
    },
    onInputChange: function onInputChange(event, inputValue) {
      if (_onInputChange) _onInputChange(event, inputValue);
    },
    popupIcon: loading ? /*#__PURE__*/React.createElement(_material.CircularProgress, {
      size: 20,
      style: {
        marginRight: "16px"
      }
    }) : /*#__PURE__*/React.createElement("img", {
      src: "/dropdown-arrow.svg",
      alt: "Dropdown Arrow",
      style: {
        width: 28,
        height: 28,
        opacity: disabled ? "0.3" : "0.5"
      }
    }),
    sx: customStyleForAutoComplete,
    slotProps: {
      paper: {
        className: "myAutoComplete__listBox ".concat(listBoxClassName || ""),
        sx: {
          borderRadius: optionBoxBorderRadius,
          "& .MuiAutocomplete-listbox": {
            padding: optionBoxPadding,
            "& .MuiAutocomplete-option": {
              fontSize: optionBoxFontSize,
              "&:hover": {
                backgroundColor: hoverOptionBgColor || "rgba(0, 0, 0, 0.1)"
              }
            }
          },
          "& .MuiAutocomplete-noOptions": {
            fontSize: fontSize
          }
        }
      }
    },
    getOptionLabel: function getOptionLabel(option) {
      return _getOptionLabel ? _getOptionLabel(option) : option.label || option;
    },
    renderOption: renderOption ? renderOption : function (props, option) {
      return /*#__PURE__*/React.createElement("li", props, option.label || option);
    },
    renderTags: renderTags,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React.createElement(_TextField["default"], _extends({}, params, {
        error: error,
        helperText: error && helperText,
        placeholder: placeholder,
        label: label || "",
        required: required,
        InputLabelProps: {
          shrink: shrink
        },
        sx: _objectSpread(_objectSpread({}, textFieldSx), {}, {
          "& .MuiInputLabel-asterisk": {
            color: requiredColor
          }
        })
      }));
    }
  }, props)));
}
MyAutoComplete.defaultProps = {
  disablePortal: false,
  borderRadius: "10px",
  placeholder: "",
  borderColor: "black",
  labelColor: "black",
  optionBoxBorderRadius: "8px",
  optionBoxPadding: "8px",
  fontSize: "14px",
  optionBoxFontSize: "14px",
  error: false,
  helperText: "",
  disabled: false,
  loading: false,
  loadingText: "Loading...",
  options: [],
  noOptionsText: "No options available",
  renderOption: null,
  getOptionLabel: null,
  label: "",
  minWidth: "300px",
  fullWidth: false,
  multiple: false,
  required: false
};