"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _urlSearchParams = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/url-search-params"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _map2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));

var _context, _context2;

// import "regenerator-runtime/runtime";
// map数据结构
var testMap = new _map2.default();
testMap.set('test', 1);
(0, _map.default)(_context = [1, 2, 3]).call(_context, function (n) {
  return n + 1;
}); // Array.prototype.includes

if ((0, _includes.default)(_context2 = [1, 2, 3]).call(_context2, 2)) {
  // Promise 对象 Javascript 内置对象
  new _promise.default(function (resolve, reject) {});
} // URLSearchParams 对象 这是一个Web API接口


var urlp = new _urlSearchParams.default(); // async await

function testAsync() {
  return _testAsync.apply(this, arguments);
}

function _testAsync() {
  _testAsync = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    return _regenerator.default.wrap(function _callee2$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee2);
  }));
  return _testAsync.apply(this, arguments);
}

var testAwait = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return testAsync();

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee);
  }));

  return function testAwait() {
    return _ref.apply(this, arguments);
  };
}(); // 使用class来声明类


var testBird = function testBird() {
  (0, _classCallCheck2.default)(this, testBird);
  this.state = {};
};

console.log(1);
