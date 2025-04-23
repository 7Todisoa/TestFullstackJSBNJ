import React from 'react';
import { Task } from '../App';

interface Props {
  tasks: Task[];
  onDelete: (id: number) => void;
}

const TaskList: React.FC<Props> = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}
          <button onClick={() => onDelete(task.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
