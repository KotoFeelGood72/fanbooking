<template>
  <component :is="isFilter" />
</template>

<script setup lang="ts">
import FilterAir from "./FilterAir.vue";
import FilterHotel from "./FilterHotel.vue";
import FilterInsure from "./FilterInsure.vue";
const props = defineProps<{
  type: string;
}>();

const isFilter = computed(() => {
  switch (props.type) {
    case "air":
      return FilterAir;
    case "hotel":
      return FilterHotel;
    case "insure":
      return FilterInsure;
    default:
      return FilterAir;
  }
});
</script>

<style scoped lang="scss"></style>
