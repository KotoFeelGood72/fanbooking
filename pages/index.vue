<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero_main">
          <div class="hero__head">
            <h1>бронирование авиабилетов и отелей на срок до 14 дней.</h1>
            <p>страховые полисы стран евросоюза</p>
          </div>
          <div class="hero_center">
            <div class="hero_togglefilter">
              <ul>
                <li @click="setType('air')" :class="{ active: type === 'air' }">
                  Авиабилеты
                </li>
                <li
                  @click="setType('hotel')"
                  :class="{ active: type === 'hotel' }"
                >
                  Отели
                </li>
                <li
                  @click="setType('insure')"
                  :class="{ active: type === 'insure' }"
                >
                  Страхование ЕС
                </li>
              </ul>
            </div>
          </div>
          <div class="hero_bottom">
            <Filter :type="type" />
          </div>
        </div>
      </div>
    </section>
    <BlockImg
      title="Не тратьте деньги на полный выкуп билетов"
      text="Сформируйте бронирование на срок рассмотрения заявления. Выкупите нужные билеты после получения визы."
      src="../img/visa.png"
      button="Забронировать авиабилет"
      :revert="false"
    />
    <BlockImg
      title="Отель без полной предоплаты для подачи на визу"
      text="Сформируйте бронирование на срок рассмотрения заявления. Выкупите нужные билеты после получения визы."
      src="../img/hotel.png"
      button="Забронировать авиабилет"
      :revert="true"
    />
    <BlockAction />
    <BlockPrefooter />
  </div>
</template>

<script setup lang="ts">
import Filter from "~/components/global/filter/Filter.vue";
import BlockImg from "~/components/blocks/BlockImg.vue";
import BlockAction from "~/components/blocks/BlockAction.vue";
import BlockPrefooter from "~/components/blocks/BlockPrefooter.vue";
const type = ref<string>("air");

function setType(newType: string) {
  type.value = newType;
}
</script>

<style scoped lang="scss">
.home {
  overflow-x: hidden;
  @include bp($point_2) {
    position: relative;
    overflow-x: auto;
    z-index: 2;
    &:before {
      content: "";
      position: absolute;
      top: -124px;

      left: 0;
      width: 100%;
      height: 900px;
      background-image: url("../assets/img/mobile.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: 100% 15%;
      z-index: 0;
      z-index: 2;
    }
  }
}
.hero {
  position: relative;
  background-color: $blue;
  padding-bottom: 74px;
  @include bp($point_2) {
    background-color: transparent;
    margin-bottom: 80px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 760px;
    height: 461px;
    background-image: url("../assets/img/air-left.png");
    z-index: 0;
    @include bp($point_2) {
      display: none;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -20%;
    width: 760px;
    height: 461px;
    background-image: url("../assets/img/air-right.png");
    z-index: 0;
    @include bp($point_2) {
      display: none;
    }
  }
}

.hero_main {
  border-radius: 58px;
  box-shadow: 0px 4px 24.6px 0px rgba(0, 0, 0, 0.25);
  background: rgba(3, 16, 39, 0.32);
  color: $white;
  padding: 50px 90px 90px 90px;
  z-index: 2;
  position: relative;

  @include bp($point_2) {
    border-radius: 40px;
    padding: 77px 10px 52px 10px;
  }
}

.hero__head {
  text-align: center;
  max-width: 724px;
  margin: 0 auto 53px auto;
  text-transform: uppercase;
  @include bp($point_2) {
    margin: 0 auto 33px auto;
  }
  h1 {
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: 400;
    font-family: $font_1;
    @include bp($point_2) {
      font-family: $font_2;
      font-size: 20px;
      font-weight: 900;
      max-width: 300px;
      margin: 0 auto;
    }
  }
  p {
    font-family: $font_1;
    font-weight: 400;
    font-size: 20px;
    @include bp($point_2) {
      display: none;
    }
  }
}

.hero_togglefilter {
  max-width: 383px;
  border-radius: 100px;
  background-color: $blue;
  margin: 0 auto 54px auto;
  @include bp($point_2) {
    border-radius: 10px;
    margin: 0 auto 29px auto;
  }
  ul {
    @include flex-center;
    padding: 7px;
    height: 51px;

    @include bp($point_2) {
      flex-direction: column;
      height: auto;
    }
    li {
      padding: 6px 10px;
      border-radius: 100px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      @include flex-center;
      flex-grow: 1;
      font-weight: 400;
      height: 100%;
      @include bp($point_2) {
        width: 100%;
        padding: 8px;
      }
      &.active {
        background-color: $white;
        color: $black;
      }
    }
  }
}

.hero_bottom {
  padding: 15px 20px;

  position: relative;
  z-index: 3;
  &:before {
    border-radius: 7px;
    backdrop-filter: blur(4px);
    background: rgba(22, 22, 22, 0.29);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
  }
}

:deep(.filter-air) {
  position: relative;
  z-index: 2;
}
:deep(.dp__arrow_bottom) {
  display: none;
}
:deep(.dp__arrow_top) {
  display: none;
}
:deep(.dp__cell_inner) {
  font-size: 14px;
  // width: 20px !important;
  height: 20px;
}
</style>
