"use strict";

require("regenerator-runtime/runtime");

require("core-js/modules/es6.promise");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.map");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


var urlp = new URLSearchParams(); // async await

function testAsync() {
  return _testAsync.apply(this, arguments);
}

function _testAsync() {
  _testAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _testAsync.apply(this, arguments);
}

var testAwait = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return testAsync();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function testAwait() {
    return _ref.apply(this, arguments);
  };
}(); // 使用class来声明类


var testBird = function testBird() {
  _classCallCheck(this, testBird);

  this.state = {};
};

console.log(1);
