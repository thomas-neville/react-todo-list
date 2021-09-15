import ToDoList from './ToDoList';
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([])

  // add function for adding todo item, passing in event, useRef hook to access things in html like the input
  const todoNameRef = useRef() // ref attribute for todo input
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    
    // Setting the Todos, take previous todos, spread operator on array
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    
    // clear the input field by resetting the value to null
    todoNameRef.current.value = null
  }

  return (
    <>
      <ToDoList todos={ todos } />
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}>Add ToDo</button>
      <button>Clear Completed ToDoList</button>
      <div>0 remaining</div>
    </>
  );
}

export default App;
