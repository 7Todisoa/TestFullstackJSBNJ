import { Task } from '../App';

const API_URL = 'http://localhost:3000/tasks';
const HEADERS = { 'Content-Type': 'application/json', 'x-api-key': '123456' };

export const getTasks = async (): Promise<Task[]> => {
  const res = await fetch(API_URL, { headers: HEADERS });
  if (!res.ok) throw new Error('Erreur lors de la récupération des tâches');
  return res.json();
};

export const addTask = async (title: string): Promise<Task> => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ title }),
  });
  if (!res.ok) throw new Error("Erreur lors de l'ajout de la tâche");
  return res.json();
};

export const deleteTask = async (id: number): Promise<void> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: HEADERS,
  });
  if (!res.ok) throw new Error("Erreur lors de la suppression de la tâche");
};
