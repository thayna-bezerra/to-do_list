import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import logo from '../../assets/to-do.svg'
import styles from './Header.module.css'

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo to-do" />

      <form className={styles.container} onSubmit={handleSubmit}>
        <input 
          placeholder='Adicione uma nova tarefa' 
          className={styles.input} 
          onChange={onChangeTitle} 
          value={title} 
        />
        <button className={styles.button}>
          <div>Criar</div>
          <PlusCircle size={20} weight="bold" />
        </button>
      </form>
    </header>
  );
}