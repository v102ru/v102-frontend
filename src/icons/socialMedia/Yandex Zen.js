var _g;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from "react";
function SvgYandexZen(_ref, svgRef) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/React.createElement("g", {
    id: "YaZen",
    "data-name": "YaZen",
    transform: "translate(-0.013 -2.014)"
  }, /*#__PURE__*/React.createElement("path", {
    id: "\\u041A\\u043E\\u043D\\u0442\\u0443\\u0440_29",
    "data-name": "\\u041A\\u043E\\u043D\\u0442\\u0443\\u0440 29",
    d: "M12.259,9.961c1.509,1.508,3.763,1.794,7.754,1.848a10,10,0,0,0-9.6-9.786c.048,4.105.319,6.406,1.85,7.937Zm-4.3,0c1.532-1.532,1.8-3.836,1.85-7.947a10,10,0,0,0-9.8,9.8c4.112-.048,6.414-.318,7.947-1.85Zm4.3,4.3c-1.507,1.508-1.793,3.76-1.848,7.745A10,10,0,0,0,20,12.412c-3.985.054-6.237.34-7.745,1.848Zm-4.3,0c-1.532-1.531-3.832-1.8-7.937-1.85a10,10,0,0,0,9.785,9.6c-.054-3.992-.339-6.246-1.848-7.754Z",
    transform: "translate(0 0)",
    fill: "#fff"
  }))));
}
var ForwardRef = /*#__PURE__*/React.forwardRef(SvgYandexZen);
export default "";
export { ForwardRef as ReactComponent };