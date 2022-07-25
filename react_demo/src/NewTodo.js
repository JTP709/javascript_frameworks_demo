import { useState } from "react";

const NewTodo = ({ setTodoList }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleOnChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setTodoList(list => {
      const updatedTodoList = [...list, newTodo];
      localStorage.setItem('todos', JSON.stringify(updatedTodoList));

      return updatedTodoList;
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" name="todo" onChange={handleOnChange} />
      <button type="submit">Add Todo</button>
    </form>
  )
};

export default NewTodo;
