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
          <BurgerBtn />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import LkButton from "../ui/LkButton.vue";
import BurgerBtn from "../ui/BurgerBtn.vue";
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
}

.header_action {
  @include flex-end;
  gap: 14px;
}
</style>
