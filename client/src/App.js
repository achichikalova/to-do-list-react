import { useEffect, useState } from 'react';
import './App.css';
import AddListItem from './components/AddListItem';
import ListItems from './components/ListItems';
import axios from 'axios';


function App() {

  const [userInput, setUserInput] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksAPI = `https://to-do-app-chi.herokuapp.com/api/tasks`;

    axios
      .get(tasksAPI)
      .then((res) => {
        const tasksData = res.data.tasks;
        if(tasksData) {
          setTasks(tasksData);
        }
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

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
