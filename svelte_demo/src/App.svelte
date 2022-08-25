<script>
  import NewTodo from './NewTodo.svelte';
  import Todos from './Todos.svelte';

  let todos = [];

  function updateTodos (event) {
    todos = [...todos, event.detail.todo];
  };

</script>

<main>
  <h1>TODO App</h1>
  <h2>Svelte</h2>
  <h3>TODOs</h3>
  <Todos todos={todos} />
  <NewTodo on:updateTodos={updateTodos} />
</main>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
:global(body) {
  background-color: rgb(39, 44, 44);
  color: white;
  font-family: "Roboto", sans-serif;
}
</style>
