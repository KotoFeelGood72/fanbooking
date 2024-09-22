<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_main">
        <div class="footer__head">
          <div class="footer__logo">
            <NuxtLink>
              <img src="../../assets/img/logo-footer.png" alt="" />
            </NuxtLink>
          </div>
          <div class="footer__nav">
            <div class="footer__menu">
              <NuxtLink to="/air">Бронь авиабилета</NuxtLink>
              <NuxtLink to="/">Бронь отеля</NuxtLink>
              <NuxtLink to="/">Страховка</NuxtLink>
            </div>
            <div class="footer__menu">
              <NuxtLink to="/agreement">Соглашение</NuxtLink>
              <NuxtLink to="/terms">Условия</NuxtLink>
              <NuxtLink to="/">Акции</NuxtLink>
            </div>
            <LkButton :bg="true" />
          </div>
        </div>
        <div class="footer_bottom">
          Информация, размещенная на сайте, не является публичной офертой 1996-2024 Fun
          booking © Портал Дешевых Авиабилетов Fun booking
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import LkButton from "../ui/LkButton.vue";
</script>

<style scoped lang="scss">
.footer {
  background-color: $blue;
  color: $white;
  a {
    color: $white;
  }
}

.footer__head {
  @include flex-space;
}

.footer__nav {
  @include flex-end;
  align-items: flex-start;
  gap: 150px;
}

.footer__menu {
  @include flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.footer_bottom {
  max-width: 656px;
  opacity: 0.5;
  line-height: 140%;
  padding: 35px 0;
}
</style>
