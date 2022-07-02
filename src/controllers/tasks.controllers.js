import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { name, done, projectId } = req.body;

    const newTask = await Task.create({
      name,
      done,
      projectId,
    });
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({
      where: { id },
    });
    res.json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  // const  = req.body
  try {
    const task = await Task.findOne({
      where: { id },
    });
    // set dice =>  si hay un campo lo actualizo y si no existe lo añado
    task.set(req.body); //para no estar trayendo todo del req.body, mandamos todo de una ve
    await task.save();
    return res.json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Task.destroy({
      where: { id },
    });
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
