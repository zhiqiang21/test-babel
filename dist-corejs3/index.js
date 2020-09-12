"use strict";

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

require("core-js/modules/web.url");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import "regenerator-runtime/runtime";
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
