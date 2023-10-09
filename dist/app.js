"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _expressHandlebars = require("express-handlebars");
var _index = _interopRequireDefault(require("./routes/index.routes"));
var _path = _interopRequireDefault(require("path"));
var _database = _interopRequireDefault(require("./database"));
var _morgan = _interopRequireDefault(require("morgan"));
//es un middleware

var app = (0, _express["default"])();
(0, _database["default"])();
app.set('views', _path["default"].join(__dirname, 'views'));
app.engine(".hbs", (0, _expressHandlebars.create)({
  layoutsDir: _path["default"].join(app.get("views"), "layouts"),
  //porcion de codigo en comun/plantillas
  partialsDir: _path["default"].join(app.get("views"), "partials"),
  //porciones de codigo html
  defaulLayout: "main",
  extname: ".hbs"
}).engine);
app.set('view engine', '.hbs');

//middlewares
app.use((0, _morgan["default"])('dev')); //registra solicitudes http en la consola
app.use(_express["default"].urlencoded({
  extended: false
})); // para poder leer datos desde un index.html 

//Routes
app.use(_index["default"]);
app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));
var _default = app;
exports["default"] = _default;