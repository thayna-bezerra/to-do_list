import styles from './Button.module.css'
import { PlusCircle } from 'phosphor-react';

interface ButtonProps {
  children?: string;
}

export function Button({children}: ButtonProps) {
  return (
    <button className={styles.button}> 
      {children}
      
      <PlusCircle size={20} weight="bold" />
    </button>
  );
}