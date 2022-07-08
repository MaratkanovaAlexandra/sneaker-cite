<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <RouterView />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: "Open Sans", sans-serif;
  font-size: 16px;
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
}

button {
  cursor: pointer;
}
</style>
