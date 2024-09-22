<template>
  <div class="filter-air">
    <div class="filter_trip">
      <div class="filter_input">
        <DefaultSelect
          placeholder="Страна"
          :options="cities"
          v-model="filterData.city"
          :arrow="true"
        />
      </div>
      <div class="filter_input small-col">
        <InputSoloDate v-model="filterData.date" mode="начало" />
      </div>
      <div class="filter_input small-col">
        <InputSoloDate v-model="filterData.date" mode="окончание" />
      </div>
      <div class="filter_input">
        <DefaultSelect
          placeholder="Путешественнокив:1"
          :options="cities"
          v-model="filterData.city"
          :arrow="true"
        />
      </div>
      <div class="filter_btn">
        <Buttons name="Получить страховку" @click="nextAirBooking" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DefaultSelect from "~/components/ui/DefaultSelect.vue";
import InputSoloDate from "~/components/ui/InputSoloDate.vue";
import Buttons from "~/components/ui/Buttons.vue";
import { useRouter } from "vue-router";
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
  city: "",
  directionTo: "",
  date: {},
});

function nextAirBooking() {
  router.push("/hotel");
}
</script>

<style scoped lang="scss">
.filter_trip {
  @include flex-center;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 10px 6px;
  max-width: 774px;
  margin: 0 auto;
  @include bp($point_2) {
    flex-direction: column;
    gap: 10px;
  }
}

.filter_input {
  flex-grow: 1;
  width: 24%;
  @include bp($point_2) {
    width: 100%;
  }
}

.filter_btn {
  display: inline-flex;
  @include bp($point_2) {
    width: 100%;
  }
}
</style>
