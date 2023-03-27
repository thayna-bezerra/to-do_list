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

  function addingTask(taskTitle: string){
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div>
      <Header 
        onAddTask={addingTask} 
      />
      <Tasks 
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </div>
  )
}