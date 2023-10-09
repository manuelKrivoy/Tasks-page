"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _task = require("../controllers/task.controller");
var router = _express["default"].Router();
router.get("/", _task.renderTasks);
router.post("/task/add", _task.addTasks);
router.get("/task/:id/edit", _task.renderEditTask);
router.post("/task/:id/edit", _task.addEditTask);
router.get("/task/:id/delete", _task.deleteTask);
router.get("/task/:id/toggleDone", _task.taskToggleDone);
var _default = router;
exports["default"] = _default;