<template>
  <div class="prefooter">
    <div class="action__img">
      <img src="@/assets/img/action.png" alt="" />
    </div>
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
.prefooter {
  overflow-x: hidden;
}
.prefooter_main {
  @include flex-center;
  margin-bottom: 100px;
  @include bp($point_2) {
    // overflow-x: hidden;
    flex-direction: column;
  }
  h2 {
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 300;
    line-height: 135%;
    @include bp($point_2) {
      // margin-bottom: 32px;
      font-size: 28px;
      font-weight: 100;
      font-family: $font_2;
      text-align: center;
    }
  }
}

.prefooter__img {
  margin-right: -25%;
  @include bp($point_2) {
    max-width: 100%;
    margin-right: -100px;
    // margin: 0;
  }
  img {
    max-width: 758px;
    @include bp($point_2) {
      max-width: 498px;
    }
  }
}

.action__img {
  height: 339px;
  max-width: 501px;
  @include bp($point_2) {
    max-width: 166px;
    height: 160px;
    margin-bottom: 16px;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
