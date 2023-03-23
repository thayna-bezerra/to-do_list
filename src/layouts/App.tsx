import { Button } from '../components/button';
import { Header } from '../components/header';
import { Input } from '../components/input';
import { List } from './List';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Input
          placeholder={"Adicione uma nova tarefa"}
        />
        <Button>Criar</Button>
      </div>
      <List />
    </div>
  )
}