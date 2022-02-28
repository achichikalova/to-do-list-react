import { useState } from 'react';
import './App.css';
import AddListItem from './components/AddListItem';
import ListItems from './components/ListItems';


function App() {

  const [userInput, setUserInput] = useState('');
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <div className="app-container">
        <h1>To Do List</h1>
        <AddListItem
          userInput={userInput}
          setUserInput={setUserInput}
          tasks={tasks}
          setTasks={setTasks}
        />
        <ListItems
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </div>
  );
}

export default App;
