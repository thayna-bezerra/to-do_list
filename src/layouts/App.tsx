import { Button } from '../components/button';
import { Header } from '../components/header';
import { Input } from '../components/input';
import './global.css';
import { Tasks } from './Tasks';

export function App(){
  return (
    <div>
      <Header />
      <div className="container">
        <Input
          placeholder = {"Adicione uma nova tarefa"}
        />
        <Button>Criar</Button>
      </div>
      <Tasks />
    </div>
  )
}