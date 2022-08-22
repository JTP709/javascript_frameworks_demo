<script>
  import NewTodo from './NewTodo.svelte';
  import Todos from './Todos.svelte';

  let todos = [];

  function updateTodos (event) {
    todos = [...todos, event.detail.todo];
  }

</script>

<main>
  <h1>TODO App</h1>
  <h2>Svelte</h2>
  <h3>TODOs</h3>
  <Todos todos={todos} />
  <NewTodo on:updateTodos={updateTodos} />
</main>

<style>
</style>
