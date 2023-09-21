import express from "express";
import Task from "../models/Task";

const router = express.Router();
router.get("/", (req, res) => {
  res.render("index");
});

router.post("/task/add", (req, res) => {
  const task = Task(req.body);

  res.send("saved");
});

router.get("/about", (req, res) => {
  res.render("about");
});

export default router;
