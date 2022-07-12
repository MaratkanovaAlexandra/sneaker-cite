<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useProductsStore } from "@/stores/products";

const store = useProductsStore();
const { isLoading } = storeToRefs(store);
</script>

<template>
  <div v-if="isLoading" class="loader">
    <img src="@/assets/icons/Loader.gif" alt="Loading..." />
  </div>
</template>

<style scoped lang="scss">
.loader {
  position: fixed;
  inset: 0 0 0 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(196, 196, 196, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
