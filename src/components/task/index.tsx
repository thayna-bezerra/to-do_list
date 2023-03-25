import { Trash } from 'phosphor-react'
import { TaskProps } from '../../App'
import styles from './Task.module.css'

interface Props {
  task: TaskProps;
}

export function Task({ task }: Props) {
  return (
    /*<div className={styles.emptyList}>
      <hr/>
      <Notepad size={80} color="#333333" weight='light' />
      <p><strong>Você ainda não tem tarefas cadastradas</strong> <br /> Crie tarefas e organize seus itens a fazer</p>
    </div>*/
    <div className={styles.task}>
      <div className={styles.taskCheckbox}>
        <input type="checkbox" />
      </div>
      <div className={styles.taskContent}>
        <p>{task.title}</p>
      </div>

      <button>
        <Trash size={18} />
      </button>
    </div>
  )
}