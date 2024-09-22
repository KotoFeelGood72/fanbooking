<template>
  <div class="sidebar_w">
    <div class="sidebar" :class="{ active: filterMobile }">
      <div class="filter_head" @click="filterMobile = !filterMobile">
        <h3>Фильтры</h3>
        <div class="filter_allreset">
          <svg-icon name="close" />
          <span>Сбросить</span>
        </div>
      </div>
      <div class="filter__section_w" :class="{ active: filterMobile }">
        <div class="filters-section">
          <Accardion title="Пересадки">
            <template #reset>
              <button>Сбросить</button>
            </template>
            <template #content>
              <div class="filters">
                <Checkboxes
                  id="all-airlines"
                  label="1 пересадка"
                  v-model="allAirlines"
                  note="45 000 ₽"
                />
                <Checkboxes
                  id="all-airlines"
                  label="2 и более пересадок"
                  v-model="allAirlines"
                  note="60 000 ₽"
                />
              </div>
            </template>
          </Accardion>
        </div>
        <div class="filters-section">
          <Accardion title="Авиакомпании">
            <template #reset>
              <button>Сбросить</button>
            </template>
            <template #content>
              <div class="filters">
                <Checkboxes
                  id="all-airlines"
                  label="Все"
                  v-model="allAirlines"
                />
                <Checkboxes
                  id="all-airlines"
                  label="Etihad Airways"
                  v-model="allAirlines"
                />
                <Checkboxes
                  id="all-airlines"
                  label="Азербайджанские авиалинии (Azal)"
                  v-model="allAirlines"
                />
                <Checkboxes
                  id="all-airlines"
                  label="Etihad Airways"
                  v-model="allAirlines"
                />
                <Checkboxes
                  id="all-airlines"
                  label="Air Arabia"
                  v-model="allAirlines"
                />
                <Checkboxes
                  id="all-airlines"
                  label="Gulf Air"
                  v-model="allAirlines"
                />
                <Checkboxes
                  id="all-airlines"
                  label="Uzbekistan Airways"
                  v-model="allAirlines"
                />
              </div>
            </template>
          </Accardion>
        </div>
        <div class="filters-section">
          <Accardion title="Время в пути">
            <template #content>
              <div class="filters">
                <InputRange
                  label="Всего"
                  :min="0"
                  :max="24"
                  :step="1"
                  :modelValue="12"
                  unit="hours"
                  @update:modelValue="updateDuration"
                />
              </div>
            </template>
          </Accardion>
        </div>
        <div class="filters-section">
          <Accardion title="Вылет и прибытие">
            <template #content>
              <div class="filters">
                <InputRange
                  label="Отправление"
                  :min="0"
                  :max="1440"
                  :step="1 / 60"
                  :modelValue="420"
                  unit="time"
                  @update:modelValue="updateTime"
                />
                <DoubleRange
                  label="Прибытие"
                  :min="0"
                  :max="48"
                  :step="0.5"
                  :startValue="arrivalStart"
                  :endValue="arrivalEnd"
                  @update:startValue="arrivalStart = $event"
                  @update:endValue="arrivalEnd = $event"
                />
              </div>
            </template>
          </Accardion>
        </div>
        <div class="filters-section">
          <Accardion title="Стоимость">
            <template #content>
              <div class="filters">
                <InputRange
                  label="Всего"
                  :min="0"
                  :max="100000"
                  :step="1000"
                  :modelValue="75000"
                  unit="currency"
                  @update:modelValue="updateCurrency"
                />
              </div>
            </template>
          </Accardion>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Checkboxes from "~/components/ui/Checkboxes.vue";
import Accardion from "~/components/ui/Accardion.vue";
import InputRange from "~/components/ui/InputRange.vue";
import DoubleRange from "~/components/ui/DoubleRange.vue";

const allAirlines = ref<boolean>(false);
const totalTime = ref(12);
const arrivalStart = ref(6);
const arrivalEnd = ref(19);
const filterMobile = ref<boolean>(false);

const updateCurrency = (newValue: any) => {
  console.log("Updated currency value:", newValue);
};

const updateTime = (newValue: any) => {
  console.log("Updated time value:", newValue);
};

const updateDuration = (newValue: any) => {
  console.log("Updated duration value:", newValue);
};
</script>

<style scoped lang="scss">
.sidebar_w {
  min-height: 100vh;
  height: 100%;
  min-width: 280px;
  @include bp($point_2) {
    width: 100%;
    max-width: 100%;
    min-height: auto;
  }
  // display: flex;
  // flex-direction: column;
}

.sidebar {
  // position: sticky;
  // top: 40px;
  // left: 0;
  max-width: 280px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 2px 15.4px 0px rgba(0, 0, 0, 0.09);
  background-color: $white;
  padding: 19px 16px;

  @include bp($point_2) {
    padding-top: 0;
    padding-bottom: 0;
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    background-color: transparent;
  }

  &.active {
    @include bp($point_2) {
      padding-top: 19px;
      padding-bottom: 19px;
      box-shadow: 0px 2px 15.4px 0px rgba(0, 0, 0, 0.09);
      background-color: $white;
    }

    .filter_head {
      @include bp($point_2) {
        margin-bottom: 30px;
      }
    }
  }
}

.filter_head {
  @include flex-space;
  margin-bottom: 30px;
  @include bp($point_2) {
    margin-bottom: 0;
  }
}

.filter_allreset {
  @include flex-end;
  color: $blue;
  gap: 2px;
  cursor: pointer;
  .icons {
    width: 18px;
    height: 18px;
    @include flex-center;
    margin-bottom: -2px;
  }
}

.filters {
  // margin-top: 20px;
}

.filter_section {
  margin-bottom: 20px;
}

.filter_section h4 {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
}

.filter_option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
}

.filter_option input {
  margin-right: 10px;
}

.filter_option label {
  flex-grow: 1;
}

.filter_option .price {
  color: $gray;
}

.filter_range {
  margin-bottom: 20px;
}

.filter_range label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
}

.filter_range input[type="range"] {
  width: 100%;
}

.range_labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: $gray;
}

.show_more {
  color: $blue;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
}
.filters {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.filters-section {
  margin-bottom: 20px;
}

.filter__section_w {
  @include bp($point_2) {
    display: none;
  }
  &.active {
    display: block;
  }
}
</style>
