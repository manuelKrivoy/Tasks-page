import express from "express";
import Task from "../models/Task";

const router = express.Router();
router.get("/", async (req, res) => {
  const tasks = await Task.find().lean(); //retorno tareas existentes, el .lean sirve para que devuelva una lista de objetos normales de JS, sin el .lean devolvería en formato mongodb

  res.render("index", { tasks: tasks }); // le paso el objeto a index.hbs
});

router.post("/task/add", async (req, res) => {
  try {
    const task = Task(req.body);

    await task.save(); //guarda en base de datos

    res.redirect("/"); //Redirecciona a mainpage
  } catch (error) {
    console.log(error);
  }
});

router.delete("/task/delete", async (req, res) => {
  try {
    const task = Task(req.body);

    await task.save(); //guarda en base de datos

    res.redirect("/"); //Redirecciona a mainpage
  } catch (error) {
    console.log(error);
  }
});

router.get("/edit/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error);
  }
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
});

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
});

router.get("/toggleDone/:id", async (req, res) => {
  const { id } = req.params;
  const task=await Task.findById(id);
  task.done=!task.done;
  await task.save();
  res.redirect("/");
});

export default router;
