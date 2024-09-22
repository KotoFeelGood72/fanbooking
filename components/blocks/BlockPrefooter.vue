<template>
  <div class="prefooter">
    <div class="container">
      <div class="prefooter_main">
        <h2>Дешевые авиабилеты онлайн – ваши мечты сбудутся</h2>
        <div class="prefooter__img">
          <img src="../../public/img/prefooter.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.prefooter_main {
  @include flex-center;
  margin-bottom: 100px;
  h2 {
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 300;
    line-height: 135%;
  }
}

.prefooter__img {
  margin-right: -25%;
  img {
    max-width: 758px;
  }
}
</style>
