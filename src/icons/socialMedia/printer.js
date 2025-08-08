var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from "react";
function SvgPrinter(_ref, svgRef) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "20px",
    height: "20px",
    viewBox: "0 0 20 20",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    id: "surface1"
  }, /*#__PURE__*/React.createElement("path", {
    style: {
      stroke: "none",
      fillRule: "nonzero",
      fill: "rgb(0%,0%,0%)",
      fillOpacity: 1
    },
    d: "M 18.75 8.59375 L 17.03125 8.59375 L 17.03125 3.75 C 17.03125 3.535156 16.945312 3.339844 16.804688 3.199219 L 14.304688 0.699219 C 14.160156 0.554688 13.964844 0.46875 13.75 0.46875 L 3.125 0.46875 C 2.695312 0.46875 2.34375 0.820312 2.34375 1.25 L 2.34375 8.59375 L 1.25 8.59375 C 0.820312 8.59375 0.46875 8.945312 0.46875 9.375 L 0.46875 15 C 0.46875 15.429688 0.820312 15.78125 1.25 15.78125 C 1.679688 15.78125 2.03125 15.429688 2.03125 15 L 2.03125 10.15625 L 17.96875 10.15625 L 17.96875 15 C 17.96875 15.429688 18.320312 15.78125 18.75 15.78125 C 19.179688 15.78125 19.53125 15.429688 19.53125 15 L 19.53125 9.375 C 19.53125 8.945312 19.179688 8.59375 18.75 8.59375 Z M 3.90625 2.03125 L 13.425781 2.03125 L 15.46875 4.074219 L 15.46875 8.59375 L 3.90625 8.59375 Z M 16.25 12.96875 L 3.75 12.96875 C 3.320312 12.96875 2.96875 13.320312 2.96875 13.75 L 2.96875 18.75 C 2.96875 19.179688 3.320312 19.53125 3.75 19.53125 L 16.25 19.53125 C 16.679688 19.53125 17.03125 19.179688 17.03125 18.75 L 17.03125 13.75 C 17.03125 13.320312 16.679688 12.96875 16.25 12.96875 Z M 15.46875 17.96875 L 4.53125 17.96875 L 4.53125 14.53125 L 15.46875 14.53125 Z M 16.800781 11.011719 C 16.65625 10.871094 16.460938 10.78125 16.242188 10.78125 C 16.136719 10.78125 16.035156 10.800781 15.945312 10.839844 L 15.949219 10.835938 C 15.847656 10.875 15.765625 10.933594 15.699219 11.011719 C 15.625 11.082031 15.566406 11.164062 15.527344 11.257812 L 15.523438 11.261719 C 15.488281 11.351562 15.464844 11.453125 15.460938 11.5625 C 15.464844 11.777344 15.554688 11.972656 15.699219 12.109375 C 15.839844 12.25 16.035156 12.335938 16.25 12.335938 C 16.460938 12.335938 16.65625 12.25 16.796875 12.109375 C 16.945312 11.972656 17.035156 11.777344 17.035156 11.5625 C 17.03125 11.453125 17.011719 11.351562 16.972656 11.257812 L 16.972656 11.261719 C 16.933594 11.164062 16.875 11.078125 16.796875 11.011719 Z M 16.800781 11.011719 "
  })));
}
var ForwardRef = /*#__PURE__*/React.forwardRef(SvgPrinter);
export default "";
export { ForwardRef as ReactComponent };