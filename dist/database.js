"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = require("mongoose");
var _config = require("./config");
var connectDB = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _mongoose.connect)("mongodb+srv://krivoymanuel:".concat(_config.password, "@crud.mgvmwdt.mongodb.net/?retryWrites=true&w=majority"));
        case 3:
          console.log("Connected to MongoDB successfully!");
          _context.next = 10;
          break;
        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          process.exit(1);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 6]]);
  }));
  return function connectDB() {
    return _ref.apply(this, arguments);
  };
}();
var _default = connectDB;
exports["default"] = _default;