<template>
  <div class="air-list">
    <AirCard />
    <AirCard />
    <AirCard />
    <AirCard />
    <AirCard />
    <AirCard />
  </div>
</template>

<script setup lang="ts">
import AirCard from "../card/AirCard.vue";
</script>

<style scoped lang="scss">
.air-list {
  @include flex-start;
  flex-direction: column;
  gap: 20px;
}
</style>
