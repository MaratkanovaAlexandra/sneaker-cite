<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";

import { useShoppingCardStore } from "@/stores/shoppingCart";
import type { shoppingCartItemType } from "@/types/shoppindCartItem";
import ProductCounter from "@/components/ProductCounter.vue";

const store = useShoppingCardStore();
const { getShortedName, getPriceForProducts } = storeToRefs(store);
const { setAmount, removeFormShoppingCard } = store;

const props = defineProps({
  item: {
    type: Object as () => shoppingCartItemType,
    required: true,
  },
});

const amount = ref(props.item.amount);
</script>

<template>
  <div class="item">
    <div class="item__data">
      <div class="item__img_wrapper">
        <img :src="item.product.image" :alt="item.product.title" />
      </div>

      <div class="item__title">
        <h4>{{ getShortedName(item.product.id) }}</h4>
        <p>$ {{ item.product.price }}</p>
      </div>
    </div>

    <ProductCounter
      v-model="amount"
      @reach-zero="removeFormShoppingCard(item.product.id)"
      @update:model-value="setAmount(item.product.id, amount)"
    />

    <h4 class="item__price">
      $ {{ (getPriceForProducts(item.product.id) as number).toFixed(2) }}
    </h4>
  </div>
</template>

<style scoped lang="scss">
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 880px;
  height: 128px;
  padding: 24px 32px;

  background: rgba(0, 0, 0, 0.04);

  &__data {
    height: 100%;
    display: flex;
    width: 247px;
    align-items: center;
    gap: 24px;
  }

  &__img_wrapper {
    height: 100%;
    width: 98px;
    background-color: #fff;
    padding: 8px 12px;
    border-radius: 8px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: scale-down;
  }

  &__title {
    h4 {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.625rem;
    }

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;

      color: rgba(0, 0, 0, 0.65);
    }
  }

  &__price {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.625rem;
    width: 130px;
    text-align: right;
  }
}
</style>
