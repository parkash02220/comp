"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MyAutoComplete = _interopRequireDefault(require("./MyAutoComplete"));
var _top100films = _interopRequireDefault(require("./top100films"));
var _Clear = _interopRequireDefault(require("@mui/icons-material/Clear"));
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _Cancel = _interopRequireDefault(require("@mui/icons-material/Cancel"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _default = exports["default"] = {
  title: "Components/MyAutoComplete",
  component: _MyAutoComplete["default"],
  parameters: {
    docs: {
      description: {
        component: "This is a customizable auto complete component with various styles and states."
      }
    }
  },
  argTypes: {
    className: {
      control: {
        type: "text"
      },
      description: "Give class to the Autocomplete.",
      defaultValue: ""
    },
    listBoxClassName: {
      control: {
        type: "text"
      },
      description: "Give class to the Autocomplete option box.",
      defaultValue: ""
    },
    disablePortal: {
      control: {
        type: "boolean"
      },
      description: "Disable the portal for the Autocomplete dropdown."
    },
    width: {
      control: {
        type: "number"
      },
      description: "Set the width of the Autocomplete component.",
      defaultValue: ""
    },
    minWidth: {
      control: {
        type: "text"
      },
      description: "Set the minimum width of the Autocomplete component.",
      defaultValue: "300px"
    },
    borderRadius: {
      control: {
        type: "text"
      },
      description: "Set the border radius for the input box.",
      defaultValue: "10px"
    },
    label: {
      control: {
        type: "text"
      },
      description: "Give label to the Autocomplete.",
      defaultValue: ""
    },
    placeholder: {
      control: {
        type: "text"
      },
      description: "Set the placeholder text for the input box.",
      defaultValue: ""
    },
    borderColor: {
      control: {
        type: "select"
      },
      options: ["white", "black", "blue", "purple", "green", "red", "lightBlue", "orange", "none", "inherit", "unset"],
      description: "Set the border color of the input box when hovered or focused.",
      defaultValue: "black"
    },
    labelColor: {
      control: {
        type: "select"
      },
      options: ["white", "black", "blue", "purple", "green", "red", "lightBlue", "orange", "gray", "none", "inherit", "unset"],
      description: "Set the color of the label.",
      defaultValue: "black"
    },
    optionBoxBorderRadius: {
      control: {
        type: "text"
      },
      description: "Set the border radius for the option box.",
      defaultValue: "8px"
    },
    optionBoxPadding: {
      control: {
        type: "text"
      },
      description: "Set the padding inside the option box.",
      defaultValue: "8px"
    },
    fontSize: {
      control: {
        type: "text"
      },
      description: "Set the font size for the input value.",
      defaultValue: "14px"
    },
    optionBoxFontSize: {
      control: {
        type: "text"
      },
      description: "Set the font size for the options inside the dropdown.",
      defaultValue: "14px"
    },
    error: {
      control: {
        type: "boolean"
      },
      description: "Set the error state of the automcomplete.",
      defaultValue: false
    },
    helperText: {
      control: {
        type: "text"
      },
      description: "Set the text for the error",
      defaultValue: "Please select valid option."
    },
    disabled: {
      control: {
        type: "boolean"
      },
      description: "Set the disable state for autocomplete",
      defaultValue: false
    },
    loading: {
      control: {
        type: "boolean"
      },
      description: "Set the loading state for autocomplete",
      defaultValue: false
    },
    loadingText: {
      control: {
        type: "text"
      },
      description: "Set the loading message for autocomplete",
      defaultValue: ""
    },
    options: {
      control: {
        type: "array"
      },
      description: "Set the data for autocomplete options",
      defaultValue: []
    },
    renderOption: {
      control: {
        type: "select"
      },
      options: ["default", "withImages", "detailed"],
      description: "Custom render logic for dropdown options. Choose a predefined rendering style.",
      defaultValue: "default"
    },
    shrink: {
      control: {
        type: "boolean"
      },
      description: "Set the state for the auto complete input shrink",
      defaultValue: ""
    },
    hoverOptionBgColor: {
      control: {
        type: "select"
      },
      options: ["rgba(0, 0, 0, 0.1)", "white", "black", "blue", "purple", "green", "red", "lightBlue", "orange", "gray", "none", "inherit", "unset"],
      description: "Choose the background color for option when hovered",
      defaultValue: "rgba(0, 0, 0, 0.1)"
    },
    hoverBorderColor: {
      control: {
        type: "select"
      },
      options: ["rgba(0, 0, 0, 0.1)", "white", "black", "blue", "purple", "green", "red", "lightBlue", "orange", "gray", "none", "inherit", "unset"],
      description: "Choose the border color for autocomplete when hovered",
      defaultValue: ""
    },
    getOptionLabel: {
      control: {
        type: "select"
      },
      options: ["Default", "WithYear"],
      description: "Custom logic for displaying the label.",
      defaultValue: "Default"
    },
    fullWidth: {
      control: {
        type: "boolean"
      },
      description: "Set the state for full width.",
      defaultValue: false
    },
    multiple: {
      control: {
        type: "boolean"
      },
      description: "Set the state whether auto complete should accept single or multiple.",
      defaultValue: false
    },
    clearIcon: {
      control: {
        type: "select"
      },
      options: ["default", "clear", "cancel"],
      description: "The icon displayed at the start of the button."
    },
    renderTags: {
      control: {
        type: "select"
      },
      options: ["default", "styledChips", "customBox", "limitTags"],
      description: "Customize how selected tags are displayed.",
      defaultValue: "default"
    },
    required: {
      control: {
        type: "boolean"
      },
      description: "Set state for the required select.",
      defaultValue: false
    },
    requiredColor: {
      control: {
        type: "select"
      },
      options: ["white", "black", "blue", "purple", "green", "red", "lightBlue", "orange", "gray", "none", "inherit", "unset"],
      description: "Select the color for required mark.",
      defaultValue: ''
    }
  }
};
var iconMap = {
  "default": undefined,
  clear: /*#__PURE__*/_react["default"].createElement(_Clear["default"], null),
  cancel: /*#__PURE__*/_react["default"].createElement(_Cancel["default"], null)
};
var Template = function Template(args) {
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedValue = _useState2[0],
    setSelectedValue = _useState2[1];
  var getRenderTags = function getRenderTags(type) {
    switch (type) {
      case "styledChips":
        return function (value, getTagProps) {
          return value.map(function (option, index) {
            return /*#__PURE__*/_react["default"].createElement(_material.Chip, _extends({
              key: option.label,
              label: "".concat(option.label, " \uD83C\uDFAC")
            }, getTagProps({
              index: index
            }), {
              sx: {
                backgroundColor: "lightblue",
                color: "black"
              }
            }));
          });
        };
      case "customBox":
        return function (value, getTagProps) {
          return /*#__PURE__*/_react["default"].createElement(Box, {
            sx: {
              display: "flex",
              flexWrap: "wrap",
              gap: 1
            }
          }, value.map(function (option, index) {
            return /*#__PURE__*/_react["default"].createElement(Box, _extends({
              key: option.label,
              sx: {
                padding: "5px 10px",
                backgroundColor: "purple",
                color: "white",
                borderRadius: "5px"
              }
            }, getTagProps({
              index: index
            })), option.label);
          }));
        };
      case "limitTags":
        return function (value, getTagProps) {
          var visibleTags = value.slice(0, 2);
          return [].concat(_toConsumableArray(visibleTags.map(function (option, index) {
            return /*#__PURE__*/_react["default"].createElement(_material.Chip, _extends({
              key: option.label,
              label: option.label
            }, getTagProps({
              index: index
            })));
          })), [value.length > 2 && /*#__PURE__*/_react["default"].createElement("span", {
            key: "more"
          }, "+", value.length - 2, " more")]);
        };
      default:
        return undefined;
    }
  };
  var getRenderOption = function getRenderOption(type) {
    switch (type) {
      case "withImages":
        return function (props, option) {
          return /*#__PURE__*/_react["default"].createElement("li", _extends({}, props, {
            style: {
              display: "flex",
              alignItems: "center"
            }
          }), /*#__PURE__*/_react["default"].createElement("img", {
            src: option.imageUrl,
            alt: option.label,
            style: {
              width: 30,
              height: 30,
              marginRight: 10,
              borderRadius: "50%"
            }
          }), /*#__PURE__*/_react["default"].createElement("span", null, option.label));
        };
      case "detailed":
        return function (props, option) {
          return /*#__PURE__*/_react["default"].createElement("li", _extends({}, props, {
            style: {
              display: "flex",
              alignItems: "center"
            }
          }), /*#__PURE__*/_react["default"].createElement("img", {
            src: option.imageUrl,
            alt: option.label,
            style: {
              width: 30,
              height: 30,
              marginRight: 10,
              borderRadius: "50%"
            }
          }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("strong", null, option.label), /*#__PURE__*/_react["default"].createElement("div", {
            style: {
              fontSize: "12px",
              color: "gray"
            }
          }, option.description)));
        };
      default:
        return null;
    }
  };
  var getLabelOptions = {
    Default: function Default(option) {
      return option.label || option;
    },
    WithYear: function WithYear(option) {
      return "".concat(option.label || option, " (").concat(option.year || "Year unknown", ")");
    }
  };
  console.log("::Selected value", selectedValue);
  var handleOptionSelect = function handleOptionSelect(_, newValue) {
    setSelectedValue(newValue);
  };
  return /*#__PURE__*/_react["default"].createElement(_MyAutoComplete["default"], _extends({}, args, {
    value: selectedValue,
    onChange: function onChange(_, newValue) {
      return handleOptionSelect(_, newValue);
    },
    renderOption: getRenderOption(args.renderOption),
    getOptionLabel: getLabelOptions[args.getOptionLabel],
    clearIcon: iconMap[args.clearIcon],
    renderTags: getRenderTags(args.renderTags)
  }));
};
var Default = exports.Default = Template.bind({});
Default.args = {
  disablePortal: false,
  minWidth: "300px",
  borderRadius: "10px",
  placeholder: "+ Movies",
  borderColor: "black",
  labelColor: "black",
  optionBoxBorderRadius: "8px",
  optionBoxPadding: "8px",
  fontSize: "14px",
  optionBoxFontSize: "14px",
  error: false,
  helperText: "Please select valid option.",
  disabled: false,
  loading: false,
  loadingText: "",
  options: _top100films["default"],
  noOptionsText: "",
  className: "",
  listBoxClassName: "",
  label: "Movie",
  hoverOptionBgColor: "rgba(0, 0, 0, 0.1)",
  getOptionLabel: "Default",
  fullWidth: false,
  renderTags: "default"
};

// export const WithoutPortal = Template.bind({});
// WithoutPortal.args = {
//   ...Default.args,
//   disablePortal: true,
// };

// export const Error = Template.bind({});
// Error.args = {
//   ...Default.args,
//   error: true,
//   helperText: "Please select a valid option.",
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   ...Default.args,
//   disabled: true,
// };

// export const Loading = Template.bind({});
// Loading.args = {
//   ...Default.args,
//   loading: true,
//   loadingText: "Loading...",
// };

// export const NoOptions = Template.bind({});
// NoOptions.args = {
//   ...Default.args,
//   options: [],
//   noOptionsText: "No options...",
// };

// export const CustomRenderedOptions = Template.bind({});
// CustomRenderedOptions.args = {
//   ...Default.args,
//   options: [
//     {
//       label: "The Shawshank Redemption",
//       year: 1994,
//       imageUrl: "/shaw_shank.jpg",
//       description: "A story of hope and friendship.",
//     },
//     {
//       label: "The Godfather",
//       year: 1972,
//       imageUrl: "/godfather.jpg",
//       description: "A tale of power and loyalty.",
//     },
//     {
//       label: "The Dark Knight",
//       year: 2008,
//       imageUrl: "/dark_night.jpg",
//       description: "A superhero masterpiece.",
//     },
//   ],
//   renderOption: "detailed",
// };