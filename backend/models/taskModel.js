let tasks = [];
let idCounter = 1;

function getAllTasks() {
  return tasks;
}

function addTask(titre) {
  const task = { id: idCounter++, titre };
  tasks.push(task);
  return task;
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
}

module.exports = { getAllTasks, addTask, deleteTask };