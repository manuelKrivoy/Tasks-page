"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
var _config = require("./config.js");
_app["default"].listen(_config.PORT);
console.log("Server Running on PORT ", _config.PORT);