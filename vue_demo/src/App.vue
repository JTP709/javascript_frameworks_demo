<script setup lang="ts">
import Todo from "./components/TodoComp.vue";
</script>

<template>
  <h1>TODO App</h1>
  <h2>Vue</h2>
  <h3>TODOs</h3>
  <Todo />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
body {
  background-color: rgb(39, 44, 44);
  color: white;
  font-family: "Roboto", sans-serif;
}

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
