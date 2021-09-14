import ToDoList from './ToDoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(["example of a todo"])
  return (
    <>
      <ToDoList todos={ todos } />
      <input type="text"></input>
      <button>Add ToDo</button>
      <button>Clear Completed ToDoList</button>
      <div>0 remaining</div>
    </>
  );
}

export default App;
