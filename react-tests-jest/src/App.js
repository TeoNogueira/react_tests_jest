// import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

function App() {

  const [tasks, setTasks] = useState([])
  const [taskTemp, setTaskTemp] = useState('');

function registerTask(){
  setTasks([...tasks, taskTemp ])
  setTaskTemp('')
}

  return (
    <div className="App">
      <input data-testid="campo-tarefa" type="text"  value={taskTemp} onChange={event => setTaskTemp(event.target.value)} />
      <button data-testid="btn-cadastrar" onClick={registerTask} type="button">Cadastrar</button>
      <ul>

        {tasks.map(task => (

          <li key={task}>{task}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
