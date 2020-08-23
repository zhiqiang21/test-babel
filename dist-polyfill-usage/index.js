"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.map");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import "core-js";
// import "regenerator-runtime/runtime";
// import 'babel-polyfill'
// map数据结构
var testMap = new Map();
testMap.set('test', 1);
[1, 2, 3].map(function (n) {
  return n + 1;
}); // Array.prototype.includes

if ([1, 2, 3].includes(2)) {
  // Promise 对象 Javascript 内置对象
  new Promise(function (resolve, reject) {});
} // URLSearchParams 对象 这是一个Web API接口


var urlp = new URLSearchParams(); // 使用class来声明类

var testBird = function testBird() {
  _classCallCheck(this, testBird);

  this.state = {};
};

console.log(1);
