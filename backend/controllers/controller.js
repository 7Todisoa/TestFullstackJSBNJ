const { getAllTasks, addTask, deleteTask } = require('../models/taskModel');

exports.getTasks = (req, res) => {
  res.json(getAllTasks());
};

exports.createTask = (req, res) => {
  const { title } = req.body;
  const task = addTask(title);
  res.status(201).json(task);
};

exports.removeTask = (req, res) => {
  const { id } = req.params;
  deleteTask(parseInt(id));
  res.status(204).send();
};