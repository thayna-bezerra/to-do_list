import styles from './Tasks.module.css'
import { Notepad } from 'phosphor-react'

export function Tasks(){
  return (
    <div>
      <div className={styles.info}>
        <p>Tarefas criadas<span className={styles.counter}>0</span></p>
        <p>Concluídas<span className={styles.counter}>0</span></p>
      </div>
      <div className={styles.emptyTasks}>
        <hr/>
        <Notepad size={80} color="#333333" weight='light' />
        <p><strong>Você ainda não tem tarefas cadastradas</strong> <br /> Crie tarefas e organize seus itens a fazer</p>
      </div>

    </div>
  )
}