"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _urlSearchParams = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/url-search-params"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

require("core-js/stable");

require("regenerator-runtime/runtime");

var _context, _context2;

(0, _map.default)(_context = [1, 2, 3]).call(_context, function (n) {
  return n + 1;
});

if ((0, _includes.default)(_context2 = [1, 2, 3]).call(_context2, 2)) {
  new _promise.default(function (resolve, reject) {});
}

var urlp = new _urlSearchParams.default();
