<template>
  <div class="air">
    <div class="air_content">
      <div class="air_head">
        <div class="air-logo">
          <img src="../../assets/img/air-logo.png" alt="" />
          <p>Flydubai</p>
        </div>
        <div class="air-transfer">1 пересадка</div>
      </div>
      <AirLine
        departureTime="02:00"
        arrivalTime="09:10"
        departureCity="Москва"
        arrivalCity="Дубай"
        departureDate="28 фев, ср"
        arrivalDate="28 фев, ср"
        duration="6 ч 10 м"
        :transfers="['VKO', 'DXB']"
      />
      <AirLine
        departureTime="02:00"
        arrivalTime="09:10"
        departureCity="Москва"
        arrivalCity="Дубай"
        departureDate="28 фев, ср"
        arrivalDate="28 фев, ср"
        duration="6 ч 10 м"
        :transfers="['VKO', 'DXB']"
        :transfersAditionaly="['VKO', 'aa']"
      />
    </div>
    <div class="air_price">
      <div class="air_prices">45000 ₽</div>
      <Buttons
        name="Купить эту бронь за 550 ₽"
        size="large"
        @click="pushAirId(1)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AirLine from "./AirLine.vue";
import Buttons from "../ui/Buttons.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function pushAirId(id: number) {
  router.push(`/air/${id}`);
}
</script>

<style scoped lang="scss">
.air {
  background-color: $white;
  border-radius: 10px;
  box-shadow: 0px 2px 15.4px 0px rgba(0, 0, 0, 0.09);
  background: $white;
  @include flex-center;
  width: 100%;

  @include bp($point_2) {
    flex-direction: column;
  }
}
.air_head {
  @include flex-space;
  // margin-bottom: 20px;
}

.air-logo {
  @include flex-start;
  gap: 8px;
  font-size: 18px;
  color: $blue;
  font-weight: 600;
  @include bp($point_2) {
    font-size: 14px;
  }
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    @include bp($point_2) {
      width: 29px;
      height: 29px;
    }
  }
}

.air_content {
  padding: 17px 25px 27px 25px;
  border-right: 1px solid $l-gray;
  width: 100%;
  max-width: 610px;
  @include bp($point_2) {
    padding: 20px 11px;
    border: none;
  }
}

.air-transfer {
  border-radius: 100px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  background: $white;
  padding: 5px 15px;
  font-weight: 500;
  color: $gray;
  font-size: 12px;
  height: 26px;
  @include flex-center;
}

.air_price {
  padding: 20px;
  text-align: center;
  position: relative;

  &:before {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    border-top: 1px solid #cecece;
    content: "";
  }
  @include bp($point_2) {
    @include flex-space;
    padding: 17px 10px;
    width: 100%;
  }

  :deep(.default-btn) {
    @include bp($point_2) {
      max-width: 200px;
    }
  }
}

.air_prices {
  font-size: 28px;
  font-weight: 600;
  font-family: "Open-Sans", sans-serif;
  margin-bottom: 15px;
  @include bp($point_2) {
    margin-bottom: 0;
  }
}
</style>
