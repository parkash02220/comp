"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MySwitch = _interopRequireDefault(require("./MySwitch"));
var _previewApi = require("storybook/internal/preview-api");
var _Notifications = _interopRequireDefault(require("@mui/icons-material/Notifications"));
var _Call = _interopRequireDefault(require("@mui/icons-material/Call"));
var _Email = _interopRequireDefault(require("@mui/icons-material/Email"));
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
  title: "Components/MySwitch",
  component: _MySwitch["default"],
  parameters: {
    docs: {
      description: {
        component: "This is a customizable switch component with various styles and states."
      }
    }
  },
  argTypes: {
    checked: {
      control: {
        type: "boolean"
      },
      description: "Set the initial checked state of the switch.",
      defaultValue: false
    },
    onChange: {
      action: "changed",
      description: "Handler to capture state changes."
    },
    label: {
      control: {
        type: "text"
      },
      description: "Set the label for the switch.",
      defaultValue: "Switch"
    },
    labelPlacement: {
      control: {
        type: "select"
      },
      options: ["end", "start", "top", "bottom"],
      description: "Set the position of the label relative to the switch.",
      defaultValue: "end"
    },
    disabled: {
      control: {
        type: "boolean"
      },
      description: "Disable the switch.",
      defaultValue: false
    },
    size: {
      control: {
        type: "select"
      },
      options: ["small", "medium"],
      description: "Set the size of the switch.",
      defaultValue: "medium"
    },
    helperText: {
      control: {
        type: "text"
      },
      description: "Helper text displayed below the switch.",
      defaultValue: ""
    },
    error: {
      control: {
        type: "boolean"
      },
      description: "Set the error state for the switch.",
      defaultValue: false
    },
    trackBgColor: {
      control: {
        type: "select"
      },
      options: ["white", "black", "blue", "purple", "green", "red", "lightBlue", "orange", "gray", "none", "inherit", "unset"],
      description: "Set the background color of the switch track.",
      defaultValue: "#E9E9EA"
    },
    checkedTrackBgColor: {
      control: {
        type: "select"
      },
      options: ["white", "black", "blue", "purple", "green", "red", "lightBlue", "orange", "gray", "none", "inherit", "unset"],
      description: "Set the background color of the track when the switch is checked.",
      defaultValue: "rgba(0, 100, 0, 0.6)"
    },
    switchStyle: {
      control: {
        type: "object"
      },
      table: {
        disable: true
      },
      description: "Custom styles for the switch component.",
      defaultValue: {}
    },
    labelStyle: {
      control: {
        type: "object"
      },
      table: {
        disable: true
      },
      description: "Custom styles for the label.",
      defaultValue: {}
    },
    boxStyle: {
      control: {
        type: "object"
      },
      table: {
        disable: true
      },
      description: "Custom styles for the surrounding box.",
      defaultValue: {}
    },
    formGroupStyle: {
      control: {
        type: "object"
      },
      table: {
        disable: true
      },
      description: "Custom styles for the FormGroup component.",
      defaultValue: {}
    },
    fontSize: {
      control: {
        type: "text"
      },
      description: "Set the font size of the label.",
      defaultValue: "16px"
    },
    fontWeight: {
      control: {
        type: "number"
      },
      description: "Set the font weight of the label.",
      defaultValue: 400
    },
    labelColor: {
      control: {
        type: "select"
      },
      options: ["white", "black", "blue", "purple", "green", "red", "lightBlue", "orange", "gray", "none", "inherit", "unset"],
      description: "Set the color of the label.",
      defaultValue: "black"
    },
    required: {
      control: {
        type: "boolean"
      },
      description: "Mark the label as required.",
      defaultValue: false
    },
    requiredColor: {
      control: {
        type: "select"
      },
      options: ["white", "black", "blue", "purple", "green", "red", "lightBlue", "orange", "gray", "none", "inherit", "unset"],
      description: "Set the color of the required asterisk.",
      defaultValue: "red"
    },
    className: {
      control: {
        type: "text"
      },
      description: "Set a custom class name for the wrapper.",
      defaultValue: ""
    },
    loading: {
      control: {
        type: "boolean"
      },
      description: "Set loading state for loader.",
      defaultValue: false
    },
    startIcon: {
      control: {
        type: "select"
      },
      options: ["none", "notification", "call", "email"],
      description: "The icon displayed at the start of the button."
    },
    endIcon: {
      control: {
        type: "select"
      },
      options: ["none", "notification", "call", "email"],
      description: "The icon displayed at the end of the button."
    },
    loadingIndicator: {
      control: {
        type: "radio"
      },
      options: [null, "/loadingB1.svg",
      // Option 1
      "/loadingB2.svg" // Option 2
      ],
      description: "Set loading indicator for switch.",
      defaultValue: null
    }
  }
};
var iconMap = {
  none: null,
  notification: /*#__PURE__*/_react["default"].createElement(_Notifications["default"], null),
  call: /*#__PURE__*/_react["default"].createElement(_Call["default"], null),
  email: /*#__PURE__*/_react["default"].createElement(_Email["default"], null)
};
var Template = function Template(args) {
  var _useArgs = (0, _previewApi.useArgs)(),
    _useArgs2 = _slicedToArray(_useArgs, 2),
    checked = _useArgs2[0].checked,
    updateArgs = _useArgs2[1];
  var handleChange = function handleChange(event) {
    var newChecked = event.target.checked;
    updateArgs({
      checked: newChecked
    });
    if (args.onChange) {
      args.onChange(event);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_MySwitch["default"], _extends({}, args, {
    startIcon: iconMap[args.startIcon],
    endIcon: iconMap[args.endIcon],
    checked: checked,
    onChange: handleChange
  }));
};
var Default = exports.Default = Template.bind({});
Default.args = {
  label: "Custom Switch",
  labelPlacement: "end",
  disabled: false,
  size: "medium",
  trackBgColor: "#E9E9EA",
  checkedTrackBgColor: "rgba(0, 100, 0, 0.6)",
  helperText: "",
  error: false,
  switchStyle: {},
  labelStyle: {},
  boxStyle: {},
  formGroupStyle: {},
  fontSize: "16px",
  fontWeight: 500,
  labelColor: "black",
  required: false,
  requiredColor: "red",
  loading: false,
  loadingIndicator: null
};

// export const Error = Template.bind({});
// Error.args = {
//   ...Default.args,
//   error: true,
//   helperText: "An error occurred.",
//   color: "error",
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   ...Default.args,
//   disabled: true,
// };

// export const CustomStyles = Template.bind({});
// CustomStyles.args = {
//   ...Default.args,
//   label: "Styled Switch",
//   switchStyle: { backgroundColor: "lightblue" },
//   labelStyle: { fontWeight: "bold", fontSize: "16px" },
//   boxStyle: {
//     padding: "20px",
//     backgroundColor: "#f5f5f5",
//     width: "fit-content",
//   },
//   formGroupStyle: { gap: "10px" },
//   labelColor: "blue",
// };

// export const Required = Template.bind({});
// Required.args = {
//   ...Default.args,
//   label: "Required Switch",
//   required: true,
//   requiredColor: "red",
// };