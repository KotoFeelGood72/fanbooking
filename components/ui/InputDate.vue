<template>
  <div class="air-date">
    <VueDatePicker
      v-model="localValue"
      range
      :hide-navigation="['month', 'year', 'time']"
      :min-date="new Date()"
      :show-last-in-range="false"
      multi-calendars
      no-today
      disable-year-select
      locale="ru"
      cancelText="Отменить"
      selectText="Выбрать"
      :format="formatDateRange"
      placeholder="Выбрать дату поездки"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  modelValue: [Date | null, Date | null];
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value: [Date | null, Date | null]): void;
}>();

const today = new Date();
const localValue = ref<[Date | null, Date | null]>([today, null]);

// onMounted(() => {
//   if (!props.modelValue || !props.modelValue[0]) {
//     emit("update:modelValue", [today, null]);
//   } else {
//     localValue.value = props.modelValue;
//   }
// });

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      localValue.value = newValue;
    }
  },
  { immediate: true }
);

const formatDateRange = (range: [Date | null, Date | null]) => {
  if (!range || range.length !== 2 || !range[0] || !range[1]) {
    return "туда — обратно";
  }

  const [start, end] = range;
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const startDate = start.toLocaleDateString("ru-RU", options);
  const endDate = end.toLocaleDateString("ru-RU", options);

  return `туда ${startDate} обратно ${endDate}`;
};
</script>

<style scoped lang="scss">
.air-date {
  width: 280px;
}
:deep(.dp__input) {
  font-size: 12px !important;
  height: 40px;
  border-radius: 7px;
}

:deep(.dp__input) {
  display: flex;
  align-items: center;
  padding: 6px 50px 6px 20px;
}

:deep(.dp__input_icon) {
  right: 20px;
  left: auto;
}

:deep(.dp__input .date-label) {
  color: grey;
  font-weight: bold;
  margin-right: 5px;
}

:deep(.dp__input .date-value) {
  color: black;
  margin-right: 10px;
}
</style>
