"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.password = exports.PORT = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var password = process.env.password;
exports.password = password;
var PORT = process.env.PORT || 3000; //si no está la variable process.env.port utiliza por defecto el 3000.
exports.PORT = PORT;