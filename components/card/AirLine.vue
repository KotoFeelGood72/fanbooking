<template>
  <div class="airline">
    <div class="air_start">
      <div class="airtime">{{ departureTime }}</div>
      <div class="aircity">{{ departureCity }}</div>
      <div class="airdate">{{ departureDate }}</div>
    </div>
    <div class="air_center">
      <div class="aircenter__head">
        <div class="air-icon">
          <img src="../../assets/sprite/svg/airleft.svg" alt="airleft" />
        </div>
        <div class="air_center__time">В пути: {{ duration }}</div>
        <div class="air-icon">
          <img src="../../assets/sprite/svg/airright.svg" alt="airright" />
        </div>
      </div>
      <div class="aircenter__medium">
        <div
          :class="[
            'air_transfer__line',
            { 'no-transfer-parent': hasNoTransfer },
          ]"
        >
          <div class="points">
            <span
              v-for="(transfer, index) in allStops"
              :key="index"
              :class="[
                'point',
                { 'no-transfer': transfer === 'без пересадок' },
              ]"
            >
              <span class="transfer">{{ transfer }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="air_end">
      <div class="airtime">{{ arrivalTime }}</div>
      <div class="aircity">{{ arrivalCity }}</div>
      <div class="airdate">{{ arrivalDate }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    departureTime: string;
    arrivalTime: string;
    departureCity: string;
    arrivalCity: string;
    departureDate: string;
    arrivalDate: string;
    duration: string;
    transfers: string[];
    transfersAditionaly?: string[];
  }>(),
  {
    departureTime: "",
    arrivalTime: "",
    departureCity: "",
    arrivalCity: "",
    duration: "",
    departureDate: "",
    transfers: () => [],
    transfersAditionaly: () => [],
  }
);

const allStops = computed(() => {
  const stops = [...props.transfers];
  const midpoint = Math.min(1, stops.length);
  if (props.transfersAditionaly.length > 0) {
    stops.splice(midpoint, 0, ...props.transfersAditionaly);
  } else {
    stops.splice(midpoint, 0, "без пересадок");
  }
  return stops;
});

const hasNoTransfer = computed(() => {
  return allStops.value.includes("без пересадок");
});
</script>

<style scoped lang="scss">
.icons {
  width: 23px;
  height: 10px;
  @include flex-center;
}

.airline {
  @include flex-space;
  gap: 58px;
  padding: 23px 0;
  @include bp($point_2) {
    gap: 20px;
  }
  &:not(:last-child) {
    border-bottom: 1px solid $l-gray;
  }

  .air_start,
  .air_end {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;

    .airtime {
      font-size: 30px;
      font-weight: 400;
      @include bp($point_2) {
        font-size: 20px;
      }
    }

    .aircity {
      font-size: 18px;
      color: $blue;
      font-weight: 400;
      @include bp($point_2) {
        font-size: 12px;
      }
    }

    .airdate {
      font-size: 18px;
      color: $m-gray;
      font-weight: 400;
      @include bp($point_2) {
        font-size: 10px;
      }
    }
  }
}

.air_center {
  flex-grow: 1;
  @include bp($point_2) {
    margin-top: -10px;
  }
}

.aircenter__head {
  @include flex-space;
  margin-bottom: 15px;
  @include bp($point_2) {
    margin-bottom: 5px;
  }
}

.air_center__time {
  font-size: 14px;
  font-weight: 500;
  color: $m-gray;
  @include bp($point_2) {
    font-size: 10px;
  }
}

.aircenter__medium {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.air_transfer__line {
  position: relative;
  width: 100%;
  height: 10px;
}

.no-transfer-parent .air_transfer__line {
  // your custom styles for no-transfer-parent class
}

.points {
  @include flex-space;
  position: relative;
  width: 100%;
  &:not(.no-transfer-parent) {
    gap: 5px;
  }
}

.point {
  position: relative;
  flex: 1;

  @include flex-center;
  &:before {
    position: absolute;
    top: 2px;
    left: 0;
    background-color: $l-gray;
    height: 2px;
    content: "";
    width: 100%;
    max-width: 75px;
    border-radius: 10px;
  }

  &:first-child {
    @include flex-start;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      background-color: $l-gray;
      height: 6px;
      content: "";
      width: 100%;
      max-width: 75px;
      border-radius: 10px;
    }
  }
  &:last-child {
    @include flex-end;
    &:before {
      position: absolute;
      top: 0;
      right: 0;
      left: auto;
      background-color: $l-gray;
      height: 6px;
      content: "";
      width: 100%;
      max-width: 75px;
      border-radius: 10px;
    }
  }
}

.transfer {
  margin-top: 10px;
  font-size: 14px;
  color: $blue;
  text-transform: uppercase;
  font-weight: 500;
  @include flex-center;
  padding-top: 4px;
  @include bp($point_2) {
    font-size: 10px;
  }
}

.point.no-transfer {
  .transfer {
    font-size: 14px;
    color: $m-gray;
    text-transform: lowercase;
    font-weight: 500;
    margin: 0 -10px 0 -10px;
    padding-top: 14px;
    @include bp($point_2) {
      font-size: 10px;
    }
  }
  &:before {
    max-width: 170% !important;
    width: 170%;
    height: 6px;
    top: 0;
    left: -35%;
  }
}
</style>
