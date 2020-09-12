"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TestTarge = function TestTarge() {
  _classCallCheck(this, TestTarge);
}; // babel中的targets和 browserslist中的配置是不一样的，targets是指启用什么插件来编译
// browserslist是启用哪些polyfill来兼容代码


_defineProperty(TestTarge, "name", 'xiaohei');
