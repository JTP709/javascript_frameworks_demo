<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import TodoList from './TodoList.vue';

const todoText = ref("");
const todoList = reactive<string[]>([]);

onMounted(() => {
  const persistedState = localStorage.getItem('todos');

  if (persistedState) {
    todoList.push(...JSON.parse(persistedState));
  }
});

const addTodo = () => {
  todoList.push(todoText.value);
  console.log({ todoList });
  localStorage.setItem("todos", JSON.stringify(todoList));
};
</script>

<template>
  <TodoList :todoList="todoList" />
  <form @submit.prevent="addTodo">
    <input
      :value="todoText"
      @input="(event) => (todoText = (event.target as HTMLInputElement).value || '')"
    />
    <button type="submit">Add Todo</button>
  </form>
</template>

<style scoped>
</style>