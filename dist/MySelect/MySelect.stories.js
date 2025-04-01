"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MySelect = _interopRequireDefault(require("./MySelect"));
var _dummyOptions = _interopRequireDefault(require("./dummyOptions"));
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
  title: "Components/MySelect",
  component: _MySelect["default"],
  parameters: {
    docs: {
      description: {
        component: "This is a customizable select component with various styles and states."
      }
    }
  },
  argTypes: {
    label: {
      control: {
        type: "text"
      },
      description: "Set label for select.",
      defaultValue: "Select"
    },
    value: {
      control: {
        type: "text"
      },
      table: {
        disable: true
      },
      description: "Set value for select.",
      defaultValue: ""
    },
    onChange: {
      action: "changed",
      description: "Handler to capture selected value changes."
    },
    options: {
      control: {
        type: "object"
      },
      description: "Options array for the dropdown menu.",
      defaultValue: [{
        value: "option1",
        label: "Option 1"
      }, {
        value: "option2",
        label: "Option 2"
      }, {
        value: "option3",
        label: "Option 3"
      }]
    },
    fullWidth: {
      control: {
        type: "boolean"
      },
      description: "Set whether the select should take full width.",
      defaultValue: false
    },
    disabled: {
      control: {
        type: "boolean"
      },
      description: "Disable the select dropdown.",
      defaultValue: false
    },
    size: {
      control: {
        type: "select"
      },
      options: ["small", "medium"],
      description: "Set size of the select input.",
      defaultValue: "medium"
    },
    variant: {
      control: {
        type: "select"
      },
      options: ["outlined", "filled", "standard"],
      description: "Set the variant style of the select.",
      defaultValue: "outlined"
    },
    borderRadius: {
      control: {
        type: "text"
      },
      description: "Set border-radius for the select input.",
      defaultValue: "10px"
    },
    minWidth: {
      control: {
        type: "text"
      },
      description: "Set minimum width for the select component.",
      defaultValue: "300px"
    },
    padding: {
      control: {
        type: "text"
      },
      description: "Set padding inside the select.",
      defaultValue: "0px"
    },
    labelFontSize: {
      control: {
        type: "text"
      },
      description: "Set font size for the label.",
      defaultValue: "16px"
    },
    borderColor: {
      control: {
        type: "select"
      },
      options: ["white", "black", "blue", "purple", "green", "red", "lightBlue", "orange", "gray", "none", "inherit", "unset"],
      description: "Set border color for the select.",
      defaultValue: "black"
    },
    hoverBorderColor: {
      control: {
        type: "select"
      },
      options: ["white", "black", "blue", "purple", "green", "red", "lightBlue", "orange", "gray", "none", "inherit", "unset"],
      description: "Set border color for the select when hovered.",
      defaultValue: ""
    },
    labelColor: {
      control: {
        type: "select"
      },
      options: ["white", "black", "blue", "purple", "green", "red", "lightBlue", "orange", "gray", "none", "inherit", "unset"],
      description: "Set label color for the select.",
      defaultValue: "black"
    },
    selectFontSize: {
      control: {
        type: "text"
      },
      description: "Set font size for the selected value.",
      defaultValue: "14px"
    },
    menuItemFontSize: {
      control: {
        type: "text"
      },
      description: "Set font size for the dropdown menu items.",
      defaultValue: "14px"
    },
    menuBackgroundColor: {
      control: {
        type: "select"
      },
      options: ["white", "black", "blue", "purple", "green", "red", "lightBlue", "orange", "gray", "none", "inherit", "unset"],
      description: "Set menu background color for the select input.",
      defaultValue: ""
    },
    menuHoverColor: {
      control: {
        type: "select"
      },
      options: ["white", "black", "blue", "purple", "green", "red", "lightBlue", "orange", "gray", "none", "inherit", "unset"],
      description: "Set menu hover color for the select input.",
      defaultValue: ""
    },
    color: {
      control: {
        type: "select"
      },
      options: ["white", "black", "blue", "purple", "green", "red", "lightBlue", "orange", "gray", "none", "inherit", "unset"],
      description: "Set color for the select input.",
      defaultValue: ""
    },
    boxShadow: {
      control: {
        type: "select"
      },
      options: ["none", "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
      // Subtle
      "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
      // Medium
      "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
      // Prominent
      "0 12px 24px rgba(0, 0, 0, 0.2)",
      // Soft and Diffused
      "0 15px 30px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)",
      // Floating
      "inset 0 2px 4px rgba(0, 0, 0, 0.1)" // Inner shadow
      ],
      description: "Set box shadow for the select component.",
      defaultValue: "none"
    },
    placeholder: {
      control: {
        type: "text"
      },
      description: "Set placeholder text for the select input.",
      defaultValue: "Select"
    },
    loading: {
      control: {
        type: "boolean"
      },
      description: "Show loading state for the dropdown.",
      defaultValue: false
    },
    helperText: {
      control: {
        type: "text"
      },
      description: "Set helper text displayed below the select input.",
      defaultValue: "Please select valid input."
    },
    error: {
      control: {
        type: "boolean"
      },
      description: "Set error state for the select input.",
      defaultValue: false
    },
    className: {
      control: {
        type: "text"
      },
      table: {
        disable: true
      },
      description: "Set class name for the select.",
      defaultValue: ""
    },
    listBoxClasssName: {
      control: {
        type: "text"
      },
      description: "Set class name for the listbox of select.",
      defaultValue: ""
    },
    optionItemClassName: {
      control: {
        type: "text"
      },
      description: "Set class name for the select option item.",
      defaultValue: ""
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
var Template = function Template(args) {
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var handleChange = function handleChange(event) {
    var selectedValue = event.target.value;
    args.onChange(selectedValue);
    args.value = selectedValue;
    setValue(selectedValue);
  };
  return /*#__PURE__*/_react["default"].createElement(_MySelect["default"], _extends({}, args, {
    value: value,
    onChange: handleChange
  }));
};
var Default = exports.Default = Template.bind({});
Default.args = {
  label: "Select Option",
  options: _dummyOptions["default"],
  fullWidth: false,
  disabled: false,
  size: "medium",
  variant: "outlined",
  borderRadius: "10px",
  minWidth: "300px",
  padding: "0px",
  labelFontSize: "16px",
  selectFontSize: "14px",
  menuItemFontSize: "14px",
  boxShadow: "none",
  placeholder: "Select an option",
  loading: false,
  helperText: "Please select an option.",
  error: false,
  borderColor: "black",
  labelColor: "black",
  required: false
};

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
// };

// export const NoOptions = Template.bind({});
// NoOptions.args = {
//   ...Default.args,
//   options: [],
//   placeholder: "No options available",
// };