import React, { useEffect, useState } from 'react';
import TaskForm from './components/form';
import TaskList from './components/list';
import { getTasks, addTask, deleteTask } from './services/services';

export interface Task {
  id: number;
  title: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError('Erreur lors du chargement des tâches');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (title: string) => {
    try {
      const newTask = await addTask(title);
      setTasks([...tasks, newTask]);
    } catch (err) {
      setError("Erreur lors de l'ajout de la tâche");
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError("Erreur lors de la suppression de la tâche");
    }
  };

  return (
    <div className="container">
      <h1>Gestionnaire de Tâches</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <TaskForm onAddTask={handleAddTask} />
      {loading ? <p>Chargement...</p> : <TaskList tasks={tasks} onDelete={handleDeleteTask} />}
    </div>
  );
}

export default App;
