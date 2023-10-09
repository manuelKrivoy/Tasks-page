import express from "express";

import {
  renderTasks,
  addTasks,
  renderEditTask,
  addEditTask,
  deleteTask,
  taskToggleDone,
} from "../controllers/task.controller";

const router = express.Router();

router.get("/", renderTasks);

router.post("/task/add", addTasks);

router.get("/task/:id/edit", renderEditTask);

router.post("/task/:id/edit", addEditTask);

router.get("/task/:id/delete", deleteTask);

router.get("/task/:id/toggleDone", taskToggleDone);

export default router;
