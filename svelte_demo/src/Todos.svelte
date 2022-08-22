<script>
  export let todos
</script>

<ul>
  {#each todos as todo}
    <li>{ todo }</li>
  {/each}
</ul>