var _defs, _g;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from "react";
function SvgTwitter(_ref, svgRef) {
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
    id: "clip-path-twitter"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "\\u041F\\u0440\\u044F\\u043C\\u043E\\u0443\\u0433\\u043E\\u043B\\u044C\\u043D\\u0438\\u043A_18",
    "data-name": "\\u041F\\u0440\\u044F\\u043C\\u043E\\u0443\\u0433\\u043E\\u043B\\u044C\\u043D\\u0438\\u043A 18",
    width: 20,
    height: 20,
    transform: "translate(180 12)",
    fill: "#fff"
  })))), _g || (_g = /*#__PURE__*/React.createElement("g", {
    id: "\\u0413\\u0440\\u0443\\u043F\\u043F\\u0430_\\u043C\\u0430\\u0441\\u043E\\u043A_12",
    "data-name": "\\u0413\\u0440\\u0443\\u043F\\u043F\\u0430 \\u043C\\u0430\\u0441\\u043E\\u043A 12",
    transform: "translate(-180 -12)",
    clipPath: "url(#clip-path-twitter)"
  }, /*#__PURE__*/React.createElement("path", {
    id: "icons8-twitter",
    d: "M15.238,2.857A4.762,4.762,0,0,0,10.5,7.52,8.181,8.181,0,0,1,5.807,5.549,5.324,5.324,0,0,1,4.474,3.784a.714.714,0,0,0-1.235-.166,5.06,5.06,0,0,0-.858,2.81A4.206,4.206,0,0,0,3.04,8.684c-.013-.006-.1-.037-.1-.037a.714.714,0,0,0-1.03.7,5.83,5.83,0,0,0,2.164,3.478l-.2.049a.714.714,0,0,0-.447,1.047,4.953,4.953,0,0,0,.991,1.112,7.731,7.731,0,0,0,1.671,1.01,11.322,11.322,0,0,1-3.947.618.714.714,0,0,0-.538,1.185A5.7,5.7,0,0,0,3.23,18.976,11.624,11.624,0,0,0,8.333,20a10.861,10.861,0,0,0,9-4.516A13.81,13.81,0,0,0,20,7.619c0-.147-.009-.292-.022-.435a7.306,7.306,0,0,0,1.4-1.733.476.476,0,0,0-.625-.645l-.077.035-.2.091a4.189,4.189,0,0,0,.453-.981.476.476,0,0,0-.7-.549,6.945,6.945,0,0,1-1.721.767A4.74,4.74,0,0,0,15.238,2.857Zm0,1.429a3.323,3.323,0,0,1,3.333,3.333,12.61,12.61,0,0,1-2.39,7.016,9.3,9.3,0,0,1-7.848,3.936A10.181,10.181,0,0,1,4.454,17.9a11.732,11.732,0,0,0,2.321-.564,6.021,6.021,0,0,0,1.547-.838.714.714,0,0,0-.292-1.235,6.483,6.483,0,0,1-2.65-1.285l.745-.186a.714.714,0,0,0,.084-1.36,4.224,4.224,0,0,1-2.526-2.139A5.8,5.8,0,0,0,5,10.476a.714.714,0,0,0,.319-1.353A2.917,2.917,0,0,1,3.982,5.57,6.308,6.308,0,0,0,4.838,6.6a9.854,9.854,0,0,0,6.314,2.448.714.714,0,0,0,.752-.713V7.619A3.323,3.323,0,0,1,15.238,4.286Z",
    transform: "translate(178.572 10.572)",
    fill: "#fff"
  }))));
}
var ForwardRef = /*#__PURE__*/React.forwardRef(SvgTwitter);
export default "";
export { ForwardRef as ReactComponent };