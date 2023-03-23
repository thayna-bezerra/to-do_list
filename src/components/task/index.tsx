import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.task}>
      <input type="checkbox" />
      <p>Esta é a minha primeira tarefa do dia, esta é a minha primeira tarefa do dia, esta é a minha primeira tarefa do dia</p>

    </div>
  )
}