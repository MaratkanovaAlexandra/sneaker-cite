<script setup lang="ts">
import { getProduct } from "@/api";
import { ref } from "vue";

const props = defineProps({
  productId: {
    type: Number,
    required: true,
  },
});

const { title, price, description, image } = await getProduct(props.productId);
const amout = ref(1);

const minusAmount = () => {
  if (amout.value <= 1) return;
  amout.value -= 1;
};

const plusAmount = () => {
  if (amout.value >= 100) return;
  amout.value += 1;
};
</script>

<template>
  <main class="main">
    <div class="main__wrapper">
      <div class="main__title">
        <h1 class="main__name">{{ title }}</h1>
        <h3 class="main__price">$ {{ price }}</h3>
      </div>
      <div class="main__image_warpper">
        <img class="main__image" :src="image" />
      </div>
      <div class="main__info">
        <div class="main__description">
          <h4>Description:</h4>
          <p>
            {{ description }}
          </p>
        </div>

        <form class="add_to_shopping_card" @submit.prevent>
          <div class="add_to_shopping_card__amount">
            <input
              type="button"
              class="add_to_shopping_card__amount_btn minus"
              @click="minusAmount"
            />
            <output class="add_to_shopping_card__amount_output">{{
              amout
            }}</output>
            <input
              type="button"
              class="add_to_shopping_card__amount_btn plus"
              @click="plusAmount"
            />
          </div>
          <input
            type="submit"
            class="add_to_shopping_card__submit"
            value="Add to cart"
          />
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main {
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  &__wrapper {
    height: min(100%, 820px);
    position: relative;

    display: flex;
  }

  &__image_warpper {
    height: 100%;
    width: 944px;
    display: grid;
    place-items: center;
    background-color: #fff;
  }

  &__title {
    position: absolute;
    inset: 0 auto auto 0;
    width: 800px;
  }

  &__name {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-bottom: 24px;
  }

  &__price {
    font-size: 1.125rem;
    line-height: 1.75rem;

    color: rgba(0, 0, 0, 0.65);
  }

  &__image {
    height: 548px;
    width: 548px;
    object-fit: scale-down;
  }

  &__info {
    width: 496px;
    padding: 32px 64px;
    display: grid;
    place-items: center;

    h4 {
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.5rem;

      margin-bottom: 18px;
    }

    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;

      color: rgba(0, 0, 0, 0.65);

      padding-bottom: 32px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }
  }
}
.add_to_shopping_card {
  display: flex;
  align-content: center;
  gap: 32px;

  &__amount {
    display: flex;
    gap: 16px;
    align-items: center;

    &_btn {
      height: 18px;
      width: 18px;
      background-position: center;
      background-repeat: no-repeat;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }

    .plus {
      background-image: url(@/assets/icons/Plus.svg);
    }

    .minus {
      background-image: url(@/assets/icons/Minus.svg);
    }

    &_output {
      width: 48px;
      height: 48px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 8px;

      font-size: 16px;
      line-height: 24px;
      font-weight: 700;

      display: grid;
      place-items: center;
    }
  }

  &__submit {
    width: 135px;
    height: 44px;
    background: #d90429;
    border: 1px solid #d90429;
    color: #fff;
    font-weight: 700;
  }
}
</style>
