import express from "express";
import Task from "../models/Task";

const router = express.Router();
router.get("/", async (req, res) => {

  const tasks = await Task.find().lean(); //retorno tareas existentes, el .lean sirve para que devuelva una lista de objetos normales de JS, sin el .lean devolvería en formato mongodb

  res.render("index", {tasks: tasks}); // le paso el objeto a index.hbs
});

router.post("/task/add", async (req, res) => {

  try {
    const task = Task(req.body);
  
    await task.save();  //guarda en base de datos
    
    res.redirect("/"); //Redirecciona a mainpage
  } catch (error) {
    console.log(error);
  }

});

router.get("/about", (req, res) => {
  res.render("about");
});

export default router;
