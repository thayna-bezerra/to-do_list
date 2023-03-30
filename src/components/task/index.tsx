import { Trash } from 'phosphor-react'
import { TaskProps } from '../../App'
import styles from './Task.module.css'

interface Props {
  task: TaskProps;
  onDelete: (taskId: string) => void,
  onComplete: (taskId: string) => void
}

export function Task({ task, onDelete, onComplete }: Props) {
  return (
    <>
      <div className={styles.task}>
        <div className={styles.taskCheckbox}>
          <input type="checkbox" onClick={() => onComplete(task.id)} />
        </div>
        <div className={styles.taskContent}>
          <p className={task.isCompleted ? styles.isChecked : ""}>{task.title}</p>
        </div>

        <button onClick={() => onDelete(task.id)}>
          <Trash size={18} />
        </button>
      </div>
    </>
  )
}