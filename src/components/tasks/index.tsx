import { TaskProps } from '../../App';
import { Task } from '../task';
import styles from './Tasks.module.css';

interface Props {
  tasks: TaskProps[],
}

export function Tasks({ tasks }: Props ) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <div>
      <div className={styles.info}>
        <p>Tarefas criadas<span className={styles.counter}>{tasksQuantity}</span></p>
        <p>Concluídas<span className={styles.counter}>{completedTasks} de {tasksQuantity}</span></p>
      </div>
      <div>
        {tasks.map((task) => (
          <Task key={task.id} task={task}/>
        ))}
      </div>
      
    </div>
  )
}