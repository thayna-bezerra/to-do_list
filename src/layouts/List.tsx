import styles from './List.module.css'
import { Notepad } from 'phosphor-react'
import { Task } from '../components/task'

export function List(){
  return (
    <div>
      <div className={styles.info}>
        <p>Tarefas criadas<span className={styles.counter}>0</span></p>
        <p>Concluídas<span className={styles.counter}>0</span></p>
      </div>
      {/*<div className={styles.emptyList}>
        <hr/>
        <Notepad size={80} color="#333333" weight='light' />
        <p><strong>Você ainda não tem tarefas cadastradas</strong> <br /> Crie tarefas e organize seus itens a fazer</p>
  </div>*/}
      <div className={styles.listTasks}>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </div>

    </div>
  )
}