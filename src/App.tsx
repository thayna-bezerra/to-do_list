import { Button } from './components/Button';
import { Header } from './components/Header';
import { Input } from './components/Input';
import './global.css';

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
    </div>
  )
}