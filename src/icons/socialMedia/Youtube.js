var _defs, _g;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from "react";
function SvgYoutube(_ref, svgRef) {
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
    id: "clip-path-youtube"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "\\u041F\\u0440\\u044F\\u043C\\u043E\\u0443\\u0433\\u043E\\u043B\\u044C\\u043D\\u0438\\u043A_20",
    "data-name": "\\u041F\\u0440\\u044F\\u043C\\u043E\\u0443\\u0433\\u043E\\u043B\\u044C\\u043D\\u0438\\u043A 20",
    width: 20,
    height: 20,
    transform: "translate(216 12)",
    fill: "#fff"
  })))), _g || (_g = /*#__PURE__*/React.createElement("g", {
    id: "\\u0413\\u0440\\u0443\\u043F\\u043F\\u0430_\\u043C\\u0430\\u0441\\u043E\\u043A_13",
    "data-name": "\\u0413\\u0440\\u0443\\u043F\\u043F\\u0430 \\u043C\\u0430\\u0441\\u043E\\u043A 13",
    transform: "translate(-216 -12)",
    clipPath: "url(#clip-path-youtube)"
  }, /*#__PURE__*/React.createElement("path", {
    id: "icons8-youtube_play_button",
    d: "M10.844,3.864a39.621,39.621,0,0,0-7.1.526l-.01,0A3.083,3.083,0,0,0,1.265,6.77v.005a25.025,25.025,0,0,0-.355,4.361,21.106,21.106,0,0,0,.4,4.376,3.11,3.11,0,0,0,2.466,2.369l.017,0a40.572,40.572,0,0,0,7.092.524,40.6,40.6,0,0,0,7.094-.524l.017,0A3.083,3.083,0,0,0,20.466,15.5l0-.01a29.053,29.053,0,0,0,.441-4.384q0-.008,0-.015a21.044,21.044,0,0,0-.444-4.414A3.11,3.11,0,0,0,18,4.306l-.054-.01A55.274,55.274,0,0,0,10.844,3.864Zm0,1.364a54.389,54.389,0,0,1,6.868.415,1.774,1.774,0,0,1,1.412,1.286l0,.012a19.5,19.5,0,0,1,.418,4.145,27.5,27.5,0,0,1-.422,4.182,1.691,1.691,0,0,1-1.417,1.282,40.112,40.112,0,0,1-6.819.5,40.066,40.066,0,0,1-6.818-.5A1.775,1.775,0,0,1,2.651,15.26l0-.012a19.548,19.548,0,0,1-.376-4.112,23.45,23.45,0,0,1,.335-4.128,1.691,1.691,0,0,1,1.42-1.285A39.6,39.6,0,0,1,10.844,5.227ZM9.3,7.283A1.612,1.612,0,0,0,7.727,8.857v4.1a1.614,1.614,0,0,0,2.381,1.376s0,0,0,0l3.632-2.052a1.6,1.6,0,0,0,0-2.752L10.108,7.481A1.532,1.532,0,0,0,9.3,7.283Zm.005,1.344a.3.3,0,0,1,.131.041l3.632,2.053c.184.1.184.273,0,.377L9.437,13.15a.214.214,0,0,1-.346-.188v-4.1a.224.224,0,0,1,.1-.206A.2.2,0,0,1,9.306,8.627Z",
    transform: "translate(215.091 10.864)",
    fill: "#fff"
  }))));
}
var ForwardRef = /*#__PURE__*/React.forwardRef(SvgYoutube);
export default "";
export { ForwardRef as ReactComponent };