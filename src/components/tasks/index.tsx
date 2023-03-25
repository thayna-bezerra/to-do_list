import { Trash } from 'phosphor-react';
import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <div>
      <div className={styles.info}>
        <p>Tarefas criadas<span className={styles.counter}>0</span></p>
        <p>Concluídas<span className={styles.counter}>2 de 10</span></p>
      </div>
      {/*<div className={styles.emptyList}>
        <hr/>
        <Notepad size={80} color="#333333" weight='light' />
        <p><strong>Você ainda não tem tarefas cadastradas</strong> <br /> Crie tarefas e organize seus itens a fazer</p>
  </div>*/}
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
    </div>
  )
}