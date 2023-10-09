import Task from "../models/Task";

export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean(); //retorno tareas existentes, el .lean sirve para que devuelva una lista de objetos normales de JS, sin el .lean devolvería en formato mongodb

  res.render("index", { tasks: tasks }); // le paso el objeto a index.hbs
};

export const addTasks = async (req, res) => {
  try {
    const task = Task(req.body);

    await task.save(); //guarda en base de datos

    res.redirect("/"); //Redirecciona a mainpage
  } catch (error) {
    console.log(error);
  }
};

export const renderEditTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error);
  }
};

export const addEditTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};

export const taskToggleDone = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};
