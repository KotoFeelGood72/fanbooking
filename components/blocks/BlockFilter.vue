<template>
  <div class="block_filter">
    <div class="container">
      <div class="block_filter__main">
        <div class="block_filter__row">
          <div class="blockFilter__direction">
            <div class="blockFilter_direction__col">
              <p class="blockFilter_col__title">Откуда</p>
              <Selects
                label="откуда"
                :options="cities"
                v-model="filterData.directionFrom"
              />
            </div>
            <div class="change_button" @click="changeDirections">
              <img src="../../assets/sprite/svg/change.svg" alt="">
            </div>
            <div class="blockFilter_direction__col">
              <p class="blockFilter_col__title">Куда</p>
              <Selects label="куда" :options="cities" v-model="filterData.directionTo" />
            </div>
          </div>
          <div class="blockFilter__dates">
            <div class="blockFilter_date__col">
              <p class="blockFilter_col__title">Откуда</p>
              <InputSoloDate v-model="filterData.dateTo" mode="туда" />
            </div>
            <div class="blockFilter_date__col">
              <p class="blockFilter_col__title">Обратно</p>
              <InputSoloDate v-model="filterData.dateFrom" mode="обратно" />
            </div>
          </div>
          <div class="blockFilter_class">
            <p class="blockFilter_col__title">Пассажиры и класс</p>
            <Selects
              label=""
              :options="classPeople"
              v-model="filterData.directionFrom"
              :arrow="true"
            />
          </div>
        </div>
        <Buttons
          name="Подобрать авиабилеты"
          size="medium"
          class="custom-padding"
          icon="air"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Selects from "../ui/Selects.vue";
import InputSoloDate from "../ui/InputSoloDate.vue";
import Buttons from "../ui/Buttons.vue";

interface Option {
  label: string;
  value: string | number;
}

const cities = ref<Option[]>([
  { label: "Москва", value: "Москва" },
  { label: "Амстердам", value: "Амстердам" },
  { label: "Зеландия", value: "Зеландия" },
  { label: "Нидерланды", value: "Нидерланды" },
  { label: "Венеция", value: "Венеция" },
  { label: "Тексел", value: "Тексел" },
  { label: "Зеландия", value: "Зеландия" },
  { label: "Велюве", value: "Велюве" },
]);
const classPeople = ref<Option[]>([
  { label: "1 пассажир, эконом", value: "1 пассажир, эконом" },
  { label: "2 пассажир, эконом", value: "2 пассажир, эконом" },
  { label: "3 пассажир, эконом", value: "3 пассажир, эконом" },
]);

const filterData = ref<any>({
  directionFrom: "",
  directionTo: "",
  dateFrom: null,
  dateTo: null,
});

const changeDirections = () => {
  const temp = filterData.value.directionFrom;
  filterData.value.directionFrom = filterData.value.directionTo;
  filterData.value.directionTo = temp;
};
</script>

<style scoped lang="scss">
.block_filter {
  margin-bottom: 20px;
}

.block_filter__main {
  background-color: $blue;
  padding: 15px 100px;
  border-radius: 7px;
}

.block_filter__row {
  @include flex-space;
  gap: 6px;
  margin-bottom: 8px;
}

.blockFilter__direction {
  @include flex-start;
  align-items: flex-end;

  :deep(.custom-select) {
    background-color: $white;
    border: 1px solid $m-gray;
    border-radius: 7px;
    padding: 12.5px 20px;
    min-width: 220px;
  }
}

.blockFilter_class {
  :deep(.custom-select) {
    background-color: $white;
    border: 1px solid $m-gray;
    border-radius: 7px;
    padding: 12.5px 20px;
    min-width: 196px;
  }
}

.blockFilter__dates {
  @include flex-start;
  gap: 6px;
}

.change_button {
  width: 34px;
  height: 34px;
  @include flex-center;
  background-color: $white;
  border: 1px solid $blue;
  border-radius: 100%;
  margin: -2px -16px 2px -16px;
  position: relative;
  z-index: 22;
  cursor: pointer;
  color: $blue;
  .icons {
    width: 15px;
    height: 15px;
  }
}

.blockFilter_col__title {
  color: $white;
  margin-bottom: 6px;
}

.blockFilter_date__col {
  max-width: 160px;
}
</style>
