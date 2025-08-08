var _defs, _g;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from "react";
function SvgVideo(_ref, svgRef) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _defs || (_defs = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip-path-video"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "\\u041F\\u0440\\u044F\\u043C\\u043E\\u0443\\u0433\\u043E\\u043B\\u044C\\u043D\\u0438\\u043A_47",
    "data-name": "\\u041F\\u0440\\u044F\\u043C\\u043E\\u0443\\u0433\\u043E\\u043B\\u044C\\u043D\\u0438\\u043A 47",
    width: 16,
    height: 16,
    transform: "translate(104 2278)",
    fill: "#fff"
  })))), _g || (_g = /*#__PURE__*/React.createElement("g", {
    id: "\\u0413\\u0440\\u0443\\u043F\\u043F\\u0430_\\u043C\\u0430\\u0441\\u043E\\u043A_19",
    "data-name": "\\u0413\\u0440\\u0443\\u043F\\u043F\\u0430 \\u043C\\u0430\\u0441\\u043E\\u043A 19",
    transform: "translate(-104 -2278)",
    opacity: 0.5,
    clipPath: "url(#clip-path-video)"
  }, /*#__PURE__*/React.createElement("path", {
    id: "icons8-video_call",
    d: "M4.6,4.5A2.609,2.609,0,0,0,2,7.1v6.8a2.609,2.609,0,0,0,2.6,2.6h6.8A2.609,2.609,0,0,0,14,13.9v-.54l3.091,1.855A.6.6,0,0,0,18,14.7V6.3a.6.6,0,0,0-.909-.515L14,7.64V7.1a2.609,2.609,0,0,0-2.6-2.6Zm0,1.2h6.8a1.391,1.391,0,0,1,1.4,1.4v6.8a1.391,1.391,0,0,1-1.4,1.4H4.6a1.391,1.391,0,0,1-1.4-1.4V7.1A1.391,1.391,0,0,1,4.6,5.7ZM16.8,7.36v6.28L14,11.96V9.04Z",
    transform: "translate(102 2275.5)",
    fill: "#fff"
  }))));
}
var ForwardRef = /*#__PURE__*/React.forwardRef(SvgVideo);
export default "";
export { ForwardRef as ReactComponent };