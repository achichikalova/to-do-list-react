import './App.css';
import AddListItem from './components/AddListItem';
import ListItems from './components/ListItems';


function App() {
  return (
    <div className="app">
      <div className="app-container">
        <h1>To Do List</h1>
        <AddListItem />
        <ListItems />
      </div>
    </div>
  );
}

export default App;
