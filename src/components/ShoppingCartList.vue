<script setup lang="ts">
import AppFooter from "./AppFooter.vue";
import { useShoppingCardStore } from "@/stores/shoppingCart";
import { storeToRefs } from "pinia";
import ShoppingCartItem from "./ShoppingCartItem.vue";
import ShoppingCartAside from "./ShoppingCartAside.vue";

const store = useShoppingCardStore();
const { bougthProducts } = storeToRefs(store);
</script>

<template>
  <main class="main">
    <div class="main__wrapper">
      <section class="cart">
        <h2 class="cart__title">Your shopping cart</h2>

        <TransitionGroup
          tag="div"
          name="bougthProducts"
          class="cart__list"
          v-if="bougthProducts.length > 0"
        >
          <ShoppingCartItem
            :item="product"
            v-for="product in bougthProducts"
            :key="product.id"
          />
        </TransitionGroup>

        <div v-else class="empty">Nothing is in cart</div>
      </section>

      <ShoppingCartAside />
    </div>
    <AppFooter />
  </main>
</template>

<style scoped lang="scss">
.main {
  &__wrapper {
    display: flex;
    max-width: 1312px;
    margin: 0 auto;
    padding: 32px 0 92px;
  }
}
.cart {
  &__title {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 21px;
  }

  &__list {
    min-height: calc(100vh - 390px);
    width: 880px;

    & > div {
      margin-bottom: 20px;
    }
  }
}

.empty {
  min-height: calc(100vh - 390px);
  width: 880px;

  font-size: 1.3rem;
  line-height: 2rem;
  padding: 40px 0 0;
}

.bougthProducts-move,
.bougthProducts-enter-active,
.bougthProducts-leave-active {
  transition: all 0.5s ease;
}

.bougthProducts-enter-from,
.bougthProducts-leave-to {
  opacity: 0;
  transform: translateX(230px);
}

.bougthProducts-leave-active {
  position: absolute;
}
</style>
