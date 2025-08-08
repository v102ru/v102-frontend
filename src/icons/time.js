var _defs, _g;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from "react";
function SvgTime(_ref, svgRef) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _defs || (_defs = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip-path-time"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "\\u041F\\u0440\\u044F\\u043C\\u043E\\u0443\\u0433\\u043E\\u043B\\u044C\\u043D\\u0438\\u043A_58",
    "data-name": "\\u041F\\u0440\\u044F\\u043C\\u043E\\u0443\\u0433\\u043E\\u043B\\u044C\\u043D\\u0438\\u043A 58",
    width: 15,
    height: 15,
    transform: "translate(104 1357)",
    fill: "#fff"
  })))), _g || (_g = /*#__PURE__*/React.createElement("g", {
    id: "\\u0413\\u0440\\u0443\\u043F\\u043F\\u0430_\\u043C\\u0430\\u0441\\u043E\\u043A_22",
    "data-name": "\\u0413\\u0440\\u0443\\u043F\\u043F\\u0430 \\u043C\\u0430\\u0441\\u043E\\u043A 22",
    transform: "translate(-104 -1357)",
    opacity: 0.5,
    clipPath: "url(#clip-path-time)"
  }, /*#__PURE__*/React.createElement("path", {
    id: "clock",
    d: "M7.742.242a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,7.742.242Zm0,13.548A6.048,6.048,0,1,1,13.79,7.742,6.047,6.047,0,0,1,7.742,13.79Zm1.869-3.157L7.043,8.767A.365.365,0,0,1,6.9,8.474V3.508a.364.364,0,0,1,.363-.363h.968a.364.364,0,0,1,.363.363V7.793l2.02,1.47a.363.363,0,0,1,.079.508l-.569.783a.365.365,0,0,1-.508.079Z",
    transform: "translate(103.758 1356.758)",
    fill: "#fff"
  }))));
}
var ForwardRef = /*#__PURE__*/React.forwardRef(SvgTime);
export default "";
export { ForwardRef as ReactComponent };