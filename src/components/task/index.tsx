import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps {
  isChecked?: boolean;
  className?: string
}

export function Task({isChecked, className}:TaskProps) {
  return (
    <div className={styles.task}>
      <div className={styles.taskCheckbox}>
        <input type="checkbox" />
      </div>
      <div className={styles.taskContent}>
        <p>Esta é a minha primeira tarefa do dia, esta é a minha primeira tarefa do dia, esta é a minha primeira tarefa do dia</p>
      </div>

      <button>
        <Trash size={18} />
      </button>
    </div>
  )
}