import './App.css';
import './css/Todo.css';
import Todolist from './components/TodoList';
import { useState } from 'react';
import AddTodo from './components/AddTodo';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoEditingId, gettodoEditingId] = useState("");

  const addTodo = (todo = {}) => {
    setTodoList([todo, ...todoList])
  }

  const EditId = (id = '') => {
    gettodoEditingId( {todoEditingId: id })
  }

  console.log(todoList)
  
  return (
    <div className="App">
      <AddTodo addTodo={addTodo}/>
      
      <Todolist todosList={todoList}/>
    </div>
  );
}

export default App;
