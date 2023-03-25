import styles from './Header.module.css'
import logo from '../../assets/to-do.svg'
import { PlusCircle } from 'phosphor-react';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo to-do" />

      <form className={styles.container}>
        <input placeholder='Adicione uma nova tarefa' className={styles.input} />
        <button className={styles.button}>
          Criar
          <PlusCircle size={20} weight="bold" />
        </button>
      </form>
    </header>
  );
}