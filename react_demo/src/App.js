import { useEffect, useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const persistedTodoList = JSON.parse(localStorage.getItem('todos'));

    if (persistedTodoList) {
      setTodoList(persistedTodoList);
    }
  }, []);

  return (
    <div>
      <h1>TODO App</h1>
      <h2>React</h2>
      <h3>TODOs</h3>
      <Todos todoList={todoList} />
      <NewTodo setTodoList={setTodoList} />
    </div>
  );
};

export default App;
