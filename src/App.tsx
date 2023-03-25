import { useState } from 'react';
import { Header } from './components/header';
import { Task } from './components/task';
import { Tasks } from './components/tasks';

import './global.css';

export interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: "T1",
      title: "teste",
      isCompleted: true,
    },
    {
      id: "T2",
      title: "teste2",
      isCompleted: false,
    }
  ]);

  return (
    <div>
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  )
}