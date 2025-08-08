var _defs, _g;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from "react";
function SvgBurger(_ref, svgRef) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _defs || (_defs = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip-path-burger"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "\\u041F\\u0440\\u044F\\u043C\\u043E\\u0443\\u0433\\u043E\\u043B\\u044C\\u043D\\u0438\\u043A_82",
    "data-name": "\\u041F\\u0440\\u044F\\u043C\\u043E\\u0443\\u0433\\u043E\\u043B\\u044C\\u043D\\u0438\\u043A 82",
    width: 24,
    height: 24,
    transform: "translate(318 222)",
    fill: "#fff"
  })))), _g || (_g = /*#__PURE__*/React.createElement("g", {
    id: "\\u0413\\u0440\\u0443\\u043F\\u043F\\u0430_\\u043C\\u0430\\u0441\\u043E\\u043A_26",
    "data-name": "\\u0413\\u0440\\u0443\\u043F\\u043F\\u0430 \\u043C\\u0430\\u0441\\u043E\\u043A 26",
    transform: "translate(-318 -222)",
    clipPath: "url(#clip-path-burger)"
  }, /*#__PURE__*/React.createElement("path", {
    id: "icons8-xbox_menu",
    d: "M14.4,2.4a12,12,0,1,0,12,12A12,12,0,0,0,14.4,2.4Zm0,1.8A10.2,10.2,0,1,1,4.2,14.4,10.211,10.211,0,0,1,14.4,4.2Zm-5.1,6a.9.9,0,1,0,0,1.8H19.5a.9.9,0,1,0,0-1.8Zm.014,3.6a.9.9,0,1,0,0,1.8H19.5a.9.9,0,1,0,0-1.8ZM9.3,17.4a.9.9,0,1,0,0,1.8H19.486a.9.9,0,1,0,0-1.8Z",
    transform: "translate(315.6 219.6)",
    fill: "#fff"
  }))));
}
var ForwardRef = /*#__PURE__*/React.forwardRef(SvgBurger);
export default "";
export { ForwardRef as ReactComponent };