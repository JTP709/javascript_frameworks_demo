<script>
	import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let todo = '';

  function updateTodo() {
    dispatch('updateTodos', {
      todo
    });
    todo = '';
  }
</script>

<form on:submit|preventDefault={updateTodo}>
  <input name="todo" type="text" bind:value={todo}>
  <button type="submit">Add Todo</button>
</form>

<style>
  button {
    background: none;
    background-color: rgb(74, 165, 66);
    color: inherit;
    border: none;
    border-radius: 4px;
    padding: 6px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    margin: 0 4px;
  }

  input {
    height: 24px;
    border-radius: 4px;
  }
</style>
