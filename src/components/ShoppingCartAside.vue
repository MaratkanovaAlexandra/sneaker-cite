<script setup lang="ts">
import { useShoppingCardStore } from "@/stores/shoppingCart";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const store = useShoppingCardStore();
const router = useRouter();

const { getOrderPrice, delivery } = storeToRefs(store);
const { resetCart } = store;

const pay = () => {
  router.push("/products");
  resetCart();
};
</script>

<template>
  <aside class="aside">
    <h3 class="aside__title">Order summary</h3>

    <div class="order">
      <div class="order__line">
        <p class="order__text-grey">Sub total</p>
        <p class="order__text-black">$ {{ getOrderPrice }}</p>
      </div>
      <div class="order__line">
        <p class="order__text-grey">Delivery fee</p>
        <p class="order__text-black">$ {{ delivery }}</p>
      </div>
    </div>

    <div class="aside__summ">$ {{ getOrderPrice + delivery }}</div>

    <button class="aside__pay_btn" @click="pay">Proceed to checkout</button>
  </aside>
</template>

<style scoped lang="scss">
.aside {
  padding: 0 64px;
  width: 430px;

  &__title {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 2rem;
    text-align: center;

    color: rgba(0, 0, 0, 0.75);

    margin-bottom: 32px;
  }

  &__summ {
    margin-top: 32px;
    text-align: right;
    line-height: 1.5rem;
    font-weight: 700;
  }

  &__pay_btn {
    margin-top: 72px;
    width: 217px;
    height: 44px;
    background: #d90429;
    border: 1px solid #d90429;

    line-height: 1.5rem;

    color: #ffffff;
  }
}

.order {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  &__line {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 12px;
  }

  &__text-grey,
  &__text-black {
    line-height: 1.5rem;
    font-weight: 700;
  }

  &__text-grey {
    color: rgba(0, 0, 0, 0.65);
  }

  &__text-black {
    color: #000;
  }
}
</style>
