<script setup lang="ts">
defineProps<{
  todoList?: string[];
}>()
</script>

<template>
  <ul>
    <li v-for="todo in todoList" :key="todo">
      {{ todo }}
    </li>
  </ul>
</template>

<style scoped>
</style>