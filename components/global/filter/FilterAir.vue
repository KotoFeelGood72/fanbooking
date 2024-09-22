<template>
  <div class="filter-air">
    <div class="filter_trip">
      <div class="filter_input dir_input">
        <div class="input_title">Поездка</div>
        <div class="filter_input__row">
          <Selects
            label="откуда"
            :options="cities"
            v-model="filterData.directionFrom"
          />
          <Selects
            label="куда"
            :options="cities"
            v-model="filterData.directionTo"
          />
          <div class="change_button" @click="changeDirections">
            <img src="../../../assets/sprite/svg/change.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="filter_input">
        <div class="input_title">Поездка</div>
        <InputDate v-model="filterData.date" />
      </div>
      <div class="filter_input">
        <div class="input_title">Пассажиры и класс</div>
        <SelectPeople />
      </div>
      <div class="filter_btn">
        <Buttons name="Найти" icon="air" @click="nextAirBooking" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Selects from "~/components/ui/Selects.vue";
import InputDate from "~/components/ui/InputDate.vue";
import SelectPeople from "~/components/ui/SelectPeople.vue";
import Buttons from "~/components/ui/Buttons.vue";
import { useRouter } from "vue-router";
const cityFrom = ref<any>();
const router = useRouter();
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

const filterData = ref<any>({
  directionFrom: "",
  directionTo: "",
  date: {},
});

function nextAirBooking() {
  router.push("/air");
}

const changeDirections = () => {
  const temp = filterData.value.directionFrom;
  filterData.value.directionFrom = filterData.value.directionTo;
  filterData.value.directionTo = temp;
};
</script>

<style scoped lang="scss">
.filter_trip {
  @include flex-start;
  align-items: flex-end;
  gap: 6px;

  @include bp($point_2) {
    flex-direction: column;
    gap: 10px;
  }
}
.filter_input__row {
  @include flex-start;
  background-color: $white;
  border-radius: 7px;
  height: 40px;
  padding: 10px 12px;
  gap: 35px;
  width: 270px;
  position: relative;
  @include bp($point_2) {
    width: 100%;
  }
}
.filter_input {
  // flex-grow: 1;
  @include bp($point_2) {
    width: 100%;
  }
}
.filter_btn {
  flex-grow: 1;

  @include bp($point_2) {
    width: 100%;
  }
}

.input_title {
  margin-bottom: 6px;
}

.change_button {
  width: 34px;
  height: 34px;
  @include flex-center;
  background-color: $white;
  border: 1px solid $blue;
  border-radius: 100%;
  margin: -2px -16px 2px -16px;
  position: absolute;
  top: 52%;
  transform: translateY(-50%);
  right: -5px;
  z-index: 22;
  cursor: pointer;
  color: $blue;

  @include bp($point_2) {
    right: 5px;
    transform: translateY(-50%) rotate(90deg);
    margin: 0;
    border: none;
  }
  .icons {
    width: 15px;
    height: 15px;
  }
}

.dir_input {
  // margin-right: 10px;
}
</style>
