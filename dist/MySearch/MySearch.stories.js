"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MySearch = _interopRequireDefault(require("./MySearch"));
var _previewApi = require("storybook/internal/preview-api");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _default = exports["default"] = {
  title: "Components/MySearch",
  component: _MySearch["default"],
  parameters: {
    docs: {
      description: {
        component: "This is a customizable search input with clear functionality and dynamic styles."
      }
    }
  },
  argTypes: {
    value: {
      control: "text",
      description: "Current value of the search input.",
      defaultValue: ""
    },
    onChange: {
      action: "changed",
      table: {
        disable: true
      },
      description: "Callback when the search value changes."
    },
    onClear: {
      action: "cleared",
      table: {
        disable: true
      },
      description: "Callback when the clear button is clicked."
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the search input.",
      defaultValue: "Search…"
    },
    helperText: {
      control: "text",
      description: "Helper text displayed below the search input.",
      defaultValue: ""
    },
    loading: {
      control: "boolean",
      description: "Set state for loading.",
      defaultValue: false
    },
    error: {
      control: "boolean",
      description: "Indicates if the input is in an error state.",
      defaultValue: false
    },
    disabled: {
      control: "boolean",
      description: "Indicates if the input is disabled.",
      defaultValue: false
    },
    searchIconColor: {
      control: {
        type: "select"
      },
      options: ["#666", "#1C252E", "black", "white", "blue", "purple", "green", "red", "lightBlue", "orange", "none", "inherit", "unset"],
      description: "Color of the search icon.",
      defaultValue: "#666"
    },
    clearIconColor: {
      control: {
        type: "select"
      },
      options: ["#666", "#1C252E", "black", "white", "blue", "purple", "green", "red", "lightBlue", "orange", "none", "inherit", "unset"],
      description: "Color of the clear icon.",
      defaultValue: "#666"
    },
    borderColor: {
      control: {
        type: "select"
      },
      options: ["#666", "#1C252E", "black", "white", "blue", "purple", "green", "red", "lightBlue", "orange", "none", "inherit", "unset"],
      description: "Border color of the search input.",
      defaultValue: "#ccc"
    },
    focusedBorderColor: {
      control: {
        type: "select"
      },
      options: ["#666", "#1C252E", "black", "white", "blue", "purple", "green", "red", "lightBlue", "orange", "none", "inherit", "unset"],
      description: "Border color when the input is focused.",
      defaultValue: "#1976d2"
    },
    inputTextColor: {
      control: {
        type: "select"
      },
      options: ["#666", "#1C252E", "black", "white", "blue", "purple", "green", "red", "lightBlue", "orange", "none", "inherit", "unset"],
      description: "Border color when the input is focused.",
      defaultValue: ""
    },
    helperTextColor: {
      control: {
        type: "select"
      },
      options: ["#666", "#1C252E", "black", "white", "blue", "purple", "green", "red", "lightBlue", "orange", "none", "inherit", "unset"],
      description: "Border color when the input is focused.",
      defaultValue: ""
    },
    errorTextColor: {
      control: {
        type: "select"
      },
      options: ["#666", "#1C252E", "black", "white", "blue", "purple", "green", "red", "lightBlue", "orange", "none", "inherit", "unset"],
      description: "Border color when the input is focused.",
      defaultValue: ""
    },
    backgroundColor: {
      control: {
        type: "select"
      },
      options: ["#666", "#1C252E", "black", "white", "blue", "purple", "green", "red", "lightBlue", "orange", "none", "inherit", "unset"],
      description: "Background color of the input box.",
      defaultValue: "#fff"
    },
    errorBorderColor: {
      control: {
        type: "select"
      },
      options: ["#666", "#1C252E", "black", "white", "blue", "purple", "green", "red", "lightBlue", "orange", "none", "inherit", "unset"],
      description: "Background color of the input box.",
      defaultValue: "#fff"
    },
    hoverBorderColor: {
      control: {
        type: "select"
      },
      options: ["#666", "#1C252E", "black", "white", "blue", "purple", "green", "red", "lightBlue", "orange", "none", "inherit", "unset"],
      description: "Background color of the input box.",
      defaultValue: "#fff"
    },
    borderRadius: {
      control: "text",
      description: "Border radius of the search input box.",
      defaultValue: "4px"
    },
    inputFontSize: {
      control: "text",
      description: "Font size for the search input.",
      defaultValue: "16px"
    },
    showClearButton: {
      control: "boolean",
      description: "Whether to show the clear button.",
      defaultValue: true
    },
    width: {
      control: "text",
      description: "Set the width of the search box.",
      defaultValue: ""
    },
    minWidth: {
      control: "text",
      description: "Set the minimum width of the search box.",
      defaultValue: "300px"
    },
    fullWidth: {
      control: "boolean",
      description: "Set if the search box should take full width.",
      defaultValue: false
    },
    onSearch: {
      action: "searched",
      table: {
        disable: true
      },
      description: "Callback when the search icon is clicked."
    }
  }
};
var Template = function Template(args) {
  var _useArgs = (0, _previewApi.useArgs)(),
    _useArgs2 = _slicedToArray(_useArgs, 2),
    value = _useArgs2[0].value,
    updateArgs = _useArgs2[1];
  var handleChange = function handleChange(event) {
    var newValue = event.target.value;
    updateArgs({
      value: newValue
    });
    args.onChange(newValue);
  };
  var handleClear = function handleClear() {
    updateArgs({
      value: ""
    });
    if (args.onClear) {
      args.onClear();
    }
  };
  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === "Enter") {
      if (args.onSearch) {
        args.onSearch(value);
      }
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_MySearch["default"], _extends({}, args, {
    value: value,
    onChange: handleChange,
    onClear: handleClear,
    onKeyDown: handleKeyDown
  }));
};
var Default = exports.Default = Template.bind({});
Default.args = {
  placeholder: "Search…",
  helperText: "",
  error: false,
  disabled: false,
  searchIconColor: "black",
  clearIconColor: "black",
  borderColor: "black",
  focusedBorderColor: "black",
  backgroundColor: "#fff",
  borderRadius: "10px",
  inputFontSize: "16px",
  showClearButton: true
};

// export const Error = Template.bind({});
// Error.args = {
//   ...Default.args,
//   error: true,
//   helperText: "An error occurred.",
//   borderColor: "red",
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   ...Default.args,
//   disabled: true,
//   placeholder: "Search is disabled.",
// };

// export const WithHelperText = Template.bind({});
// WithHelperText.args = {
//   ...Default.args,
//   helperText: "Search for items using keywords.",
// };

// export const CustomStyles = Template.bind({});
// CustomStyles.args = {
//   ...Default.args,
//   borderColor: "blue",
//   backgroundColor: "#f5f5f5",
//   inputFontSize: "18px",
//   borderRadius: "8px",
// };

// export const DynamicWidth = Template.bind({});
// DynamicWidth.args = {
//   ...Default.args,
//   width: "50%",
//   fullWidth: true,
//   minWidth: "400px",
// };