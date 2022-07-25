const Todos = ({todoList}) => {
  return (
    <ul>
      {
        todoList.map(todo => (
          <li key={todo}>{ todo }</li>
        ))
      }
    </ul>
  );
};

export default Todos;
