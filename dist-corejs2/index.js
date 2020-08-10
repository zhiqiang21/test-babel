"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/stable");

require("regenerator-runtime/runtime");

[1, 2, 3].map(function (n) {
  return n + 1;
});

if ([1, 2, 3].includes(2)) {
  new _promise.default(function (resolve, reject) {});
}

var urlp = new URLSearchParams();
