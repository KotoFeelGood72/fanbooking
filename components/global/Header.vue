<template>
  <header class="header">
    <div class="container">
      <div class="header_main">
        <div class="header_logo">
          <NuxtLink to="/">
            <img src="../../assets/img/logo.png" alt="" />
          </NuxtLink>
        </div>
        <div class="header_action">
          <LkButton />
          <BurgerBtn @click="menu = !menu" />
          <div class="modal_menu" v-if="menu">
            <ul>
              <li>
                <NuxtLink to="/"> Главная </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/air"> Бронь авиабилета </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/hotel"> Бронь отеля </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/insurance"> Бронь страховки </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import LkButton from "../ui/LkButton.vue";
import BurgerBtn from "../ui/BurgerBtn.vue";
import { useRoute } from "vue-router";

const menu = ref(false);

const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    menu.value = false;
  }
);
</script>

<style scoped lang="scss">
.header {
  background-color: $blue;
  padding: 18px 0 22px 0;
  color: $white;
}

.header_main {
  @include flex-space;
  border: 5px solid $white;
  border-radius: 34px;
  box-shadow: inset 0px -4px 5px 0px rgba(0, 0, 0, 0.25);
  padding: 29px 52px;
  max-height: 100px;
  @include bp($point_2) {
    border: 4px solid $white;
    padding: 12px 23px;
    border-radius: 24px;
  }
}

.header_action {
  @include flex-end;
  gap: 14px;
  position: relative;
}

.modal_menu {
  position: absolute;
  top: calc(100% + 12px);
  background-color: $white;
  z-index: 102;
  padding: 17px 23px;
  border-radius: 10px;
  min-width: 280px;

  li {
    a {
      color: #868686;
      &:hover,
      &:focus {
        color: $black;
      }
    }
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}

.router-link-active,
.router-link-exact-active {
  color: $black;
}
</style>
