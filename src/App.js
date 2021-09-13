import ToDoList from './ToDoList';

function App() {
  return (
    <>
      <ToDoList />
      <input type="text"></input>
      <button>Add ToDo</button>
      <button>Clear Completed ToDoList</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
