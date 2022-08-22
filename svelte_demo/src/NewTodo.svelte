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
