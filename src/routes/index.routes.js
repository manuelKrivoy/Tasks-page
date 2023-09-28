import express from "express";
import Task from "../models/Task";

const router = express.Router();
router.get("/", (req, res) => {
  res.render("index");
});

router.post("/task/add", async (req, res) => {
  const task = Task(req.body);
  
  await task.save();  //guarda en base de datos
  
  res.redirect("/"); //Redirecciona a mainpage
});

router.get("/about", (req, res) => {
  res.render("about");
});

export default router;
