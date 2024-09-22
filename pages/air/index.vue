<template>
  <div class="air-catalog">
    <BlockFilter />
    <div class="container">
      <div class="air-catalog__main">
        <SideFilter class="sidebars" />
        <div class="air_catalog__content">
          <AirView />
          <div class="reload">
            <p>Обновить поиск</p>
            <span>цены могли устареть</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlockFilter from "~/components/blocks/BlockFilter.vue";
import SideFilter from "~/components/global/sidebars/SideFilter.vue";
import AirView from "~/components/list/AirView.vue";

useHead({
  title: "Бронирование авиабилетов",
});
</script>

<style scoped lang="scss">
.sidebars {
  @include bp($point_2, $direction: min) {
    position: sticky;
    top: 20px;
    left: 0;
  }
}
.air-catalog {
  background-color: $light;
  @include bp($point_2) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .container {
    @include bp($point_2) {
      margin: 0;
    }
  }
}

.air-catalog__main {
  @include flex-start;
  align-items: flex-start;
  gap: 20px;
  padding-bottom: 150px;
  height: 100%;
  min-height: 100vh;

  @include bp($point_2) {
    flex-direction: column;
    width: 100%;
  }
}

.air_catalog__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.reload {
  background-color: $blue;
  color: $white;
  @include flex-center;
  flex-direction: column;
  gap: 5px;
  padding: 13px;
  border-radius: 7px;
  cursor: pointer;
  p {
    font-size: 16px;
    font-weight: 500;
    font-family: $font_2;
  }
  span {
    font-family: $font_2;
    font-size: 14px;
  }
}
</style>
