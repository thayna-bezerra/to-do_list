import { Notepad } from 'phosphor-react';
import { TaskProps } from '../../App';
import { Task } from '../task';
import styles from './Tasks.module.css';

interface Props {
  tasks: TaskProps[],
  onDelete:(taskId: string) => void,
  onComplete:(taskId: string) => void,
}

export function Tasks({ tasks, onDelete, onComplete }: Props ) {
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
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete}/>
        ))}
      </div>

      {tasks.length <= 0 && (
        <div className={styles.emptyList}>
        <hr />
        <Notepad size={80} color="#333333" weight='light' />
        <p><strong>Você ainda não tem tarefas cadastradas</strong> <br /> Crie tarefas e organize seus itens a fazer</p>
      </div>
      )}
    </div>
  )
}