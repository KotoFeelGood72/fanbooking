<template>
  <div class="select_people">
    <div class="select_people__col count">пассажиры <span>2</span></div>
    <div class="select_people__col class">класс <span>Эконом</span></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.select_people {
  background-color: $white;
  border-radius: 7px;
  color: $black;
  @include flex-start;
  height: 40px;
  padding: 10px 12px;
  gap: 11px;
  font-size: 12px;
  cursor: pointer;
}
.select_people__col {
  color: $m-gray;
  span {
    color: $black;
  }
}
</style>
