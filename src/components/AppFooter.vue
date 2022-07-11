<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="contacts">
        <ul>
          <li class="contacts__links">
            <p>Don't missout on once-in-a-while-deals:</p>
            <a href="#" class="contacts__icon twitter"></a>
            <a href="#" class="contacts__icon instagram"></a>
            <a href="#" class="contacts__icon facebook"></a>
          </li>
          <li class="contacts__links">
            <p>Support line:</p>
            <a href="tel:+250788467808">+250 788 467 808</a>
          </li>
        </ul>
      </div>
      <p class="footer__copyright">Copyright 2021 © Sneaker City ltd</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: rgba(0, 0, 0, 0.65);
  padding: 0 64px;

  &__wrapper {
    padding: 32px 0 64px;
    border-top: 1px solid rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  &__copyright {
    font-size: 14px;
    line-height: 18px;
    min-width: max-content;
  }
}
.contacts {
  & ul {
    display: flex;
    flex-wrap: wrap;
    gap: 14px 120px;
  }

  &__links {
    display: flex;
    gap: 12px;
  }

  &__icon {
    display: block;
    width: 32px;
    height: 32px;

    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    background-position: center;
    background-repeat: no-repeat;
  }
}

.facebook {
  background-image: url(@/assets/icons/Facebook.svg);
}

.instagram {
  background-image: url(@/assets/icons/Instagram.svg);
}

.twitter {
  background-image: url(@/assets/icons/Twitter.svg);
}

@media (max-width: 1109px) {
  .footer {
    &__wrapper {
      flex-direction: column;
      gap: 60px;
      align-items: center;
    }
  }

  .contacts {
    ul {
      gap: 14px;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
