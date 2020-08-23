"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _map = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/map"));

// import "regenerator-runtime/runtime";
// map数据结构
var testMap = new _map.default();
testMap.set('test', 1);
[1, 2, 3].map(function (n) {
  return n + 1;
}); // Array.prototype.includes

if ([1, 2, 3].includes(2)) {
  // Promise 对象 Javascript 内置对象
  new _promise.default(function (resolve, reject) {});
} // URLSearchParams 对象 这是一个Web API接口


var urlp = new URLSearchParams(); // 使用class来声明类

var testBird = function testBird() {
  (0, _classCallCheck2.default)(this, testBird);
  this.state = {};
};

console.log(1);
