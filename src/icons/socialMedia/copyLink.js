var _defs, _g;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from "react";
function SvgCopyLink(_ref, svgRef) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _defs || (_defs = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip-path-copyLink"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "\\u041F\\u0440\\u044F\\u043C\\u043E\\u0443\\u0433\\u043E\\u043B\\u044C\\u043D\\u0438\\u043A_18",
    "data-name": "\\u041F\\u0440\\u044F\\u043C\\u043E\\u0443\\u0433\\u043E\\u043B\\u044C\\u043D\\u0438\\u043A 18",
    width: 20,
    height: 20,
    transform: "translate(26 12)",
    fill: "#fff"
  })))), _g || (_g = /*#__PURE__*/React.createElement("g", {
    id: "\\u0413\\u0440\\u0443\\u043F\\u043F\\u0430_\\u043C\\u0430\\u0441\\u043E\\u043A_29",
    "data-name": "\\u0413\\u0440\\u0443\\u043F\\u043F\\u0430 \\u043C\\u0430\\u0441\\u043E\\u043A 29",
    transform: "translate(-26 -12)",
    clipPath: "url(#clip-path-copyLink)"
  }, /*#__PURE__*/React.createElement("path", {
    id: "icons8-link",
    d: "M18.125,3.333a5.2,5.2,0,0,0-3.7,1.536L13.2,6.094a5.21,5.21,0,0,0-1.536,3.7,5.13,5.13,0,0,0,.365,1.9l1.354-1.354a3.571,3.571,0,0,1,.99-3.073L15.6,6.042A3.567,3.567,0,0,1,18.125,5a3.507,3.507,0,0,1,2.5,1.042,3.562,3.562,0,0,1,0,5.026L19.4,12.292a3.567,3.567,0,0,1-2.526,1.042,3.052,3.052,0,0,1-.547-.052l-1.354,1.354a5.13,5.13,0,0,0,1.9.365,5.2,5.2,0,0,0,3.7-1.536L21.8,12.24a5.21,5.21,0,0,0,1.536-3.7,5.246,5.246,0,0,0-5.208-5.208ZM16.068,9.4,9.4,16.068l1.2,1.2L17.266,10.6ZM9.792,11.667a5.2,5.2,0,0,0-3.7,1.536L4.87,14.427a5.21,5.21,0,0,0-1.536,3.7,5.246,5.246,0,0,0,5.208,5.208,5.2,5.2,0,0,0,3.7-1.536l1.224-1.224A5.21,5.21,0,0,0,15,16.875a5.13,5.13,0,0,0-.365-1.9l-1.354,1.354a3.571,3.571,0,0,1-.99,3.073l-1.224,1.224a3.567,3.567,0,0,1-2.526,1.042,3.507,3.507,0,0,1-2.5-1.042,3.562,3.562,0,0,1,0-5.026l1.224-1.224a3.567,3.567,0,0,1,2.526-1.042,3.052,3.052,0,0,1,.547.052l1.354-1.354A5.13,5.13,0,0,0,9.792,11.667Z",
    transform: "translate(22.667 8.667)",
    fill: "#fff"
  }))));
}
var ForwardRef = /*#__PURE__*/React.forwardRef(SvgCopyLink);
export default "";
export { ForwardRef as ReactComponent };