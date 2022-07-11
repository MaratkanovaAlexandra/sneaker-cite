<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <main class="main">
    <section class="main__container">
      <h1 class="main__title">Hello dear customer!</h1>
      <button @click="router.push('/products')" class="main__btn">
        Go shopping !
      </button>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.main__container {
  margin: 0 auto;
  max-width: 1440px;
  padding: 150px 20px;

  display: grid;
  place-items: center;
}

.main__title {
  font-size: 3rem;
  font-weight: 500;

  margin-bottom: 50px;
}

.main__btn {
  height: 70px;
  width: 220px;

  font-size: 1.2rem;
  font-weight: 700;

  color: #fff;
  background-color: #d90429;
  border: 1px solid #d90429;
  border-radius: 100vmax;

  animation: 2s ripple infinite;
}

@keyframes ripple {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
