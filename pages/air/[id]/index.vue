<template>
  <div class="single-air">
    <div class="container">
      <div class="single-air__main">
        <div class="single_air__head">
          <h1>Бронирование авиабилетов на 10 дней</h1>
          <p>Москва — Дубай • 28 февраля</p>
        </div>
        <div class="single_row info_row">
          <div class="single_air__info">
            <div class="single_airInfo__head">
              <p>Москва - Дубай</p>
              <img src="../../assets/img/airlogo.png" alt="" />
            </div>
            <AirLine
              class="airline-info"
              departureTime="02:00"
              arrivalTime="09:10"
              departureCity="Москва"
              arrivalCity="Дубай"
              departureDate="28 фев, ср"
              arrivalDate="28 фев, ср"
              duration="6 ч 10 м"
              :transfers="['VKO', 'DXB']"
            />
            <ul>
              <li>Рейс: G9951</li>
              <li>Выполняет: Air Arabia</li>
              <li>Эконом</li>
              <li>Без багажа</li>
            </ul>
          </div>
          <div class="single_air__price">
            <div class="price">
              <span>Стоимость:</span>
              <p>550 ₽</p>
            </div>
          </div>
        </div>
        <div class="single_row row__text">
          <p>
            Получите и распечатайте бланк бронирования для оформления визы, прохождения
            паспортного, таможенного досмотров и прочих формальностей.
          </p>
          <p>
            Бронь будет поддерживаться для проверки до <span>05 мар, 2024</span> и
            отменится автоматически, без дополнительных платежей.
          </p>
          <p>
            По истечении брони, вы сможете приобрести полноценный билет для перелета по
            выбранному маршруту с нашей помощью и по актуальной цене на дату обращения."
          </p>
        </div>
        <div class="single_row row__clients">
          <div class="row_clients__head">
            <h3>Пассажиры</h3>
            <p>Данные вводить латиницей, как в загранпаспорте</p>
          </div>
          <div class="row_clients__form">
            <div class="input__col">
              <p>Пол</p>
              <GenderSwitch />
            </div>
            <div class="input__col">
              <p>Фамилия</p>
              <Inputs />
            </div>
            <div class="input__col">
              <p>Имя</p>
              <Inputs />
            </div>
            <div class="input__col">
              <p>Дата рождения</p>
              <InputSoloDate v-model="birthday" mode="дд.мм.гггг" />
            </div>
            <div class="input__col">
              <p>Ваш E-mail</p>
              <Inputs />
            </div>
            <div class="note__col">
              Бронирование отправим на указанный E-mail. Также оно будет доступно в личном
              кабинете
            </div>
          </div>
          <div class="row_clients_bottom">
            <Checkboxes
              id="confirm"
              label="Отправляя данную форму, Вы соглашаетесь с условиями тарифа, договора и обработкой персональных данных"
              v-model="confirm"
            />
            <div class="form_btn">
              <Buttons name="Завершить оформление" size="medium" @click="confirmAir()" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AirLine from "~/components/card/AirLine.vue";
import GenderSwitch from "~/components/ui/GenderSwitch.vue";
import Inputs from "~/components/ui/Inputs.vue";
import InputSoloDate from "~/components/ui/InputSoloDate.vue";
import Checkboxes from "~/components/ui/Checkboxes.vue";
import Buttons from "~/components/ui/Buttons.vue";
import { useRouter, useRoute } from "vue-router";

const birthday = ref();
const confirm = ref();
const router = useRouter();
const route = useRoute();

function confirmAir() {
  router.push(`/air/${route.params.id}/confirm`);
}
</script>

<style scoped lang="scss">
.single-air {
  background-color: $light;
  padding: 30px 0 100px 0;
}

.single_air__head {
  @include flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  h1 {
    font-size: 32px;
    font-weight: 600;
  }
  p {
    font-size: 24px;
  }
}

.single_row {
  @include flex-start;
  gap: 20px;
}

.single_air__price {
  background-color: $white;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  max-width: 382px;
  @include flex-center;
  min-height: 240px;
  .price {
    @include flex-center;
    gap: 10px;
    p {
      font-size: 28px;
      font-weight: 600;
      font-family: "Open-Sans", sans-serif;
    }
    span {
      font-weight: 400;
      font-size: 20px;

      // margin-top: -5px;
      // margin-bottom: 5px;
      // display: inline-flex;
    }
  }
}

.single_air__info {
  flex-grow: 1;
  min-height: 240px;

  ul {
    padding: 13px 13px 25px 13px;
    @include flex-center;
    gap: 31px;
    color: $l-gray;
    font-size: 14px;
    font-weight: 600;
  }
}

.airline-info {
  padding: 16px 0;
  margin-left: 16px;
  margin-right: 16px;
  padding-top: 5px;

  :deep(.air_center) {
    max-width: 308px;
  }
}

.single_airInfo__head {
  @include flex-space;
  gap: 20px;
  padding: 16px;

  p {
    font-weight: 600;
    color: $blue;
  }
}

.single_row {
  margin-bottom: 20px;
  background-color: $white;
  border-radius: 10px;
}

.single_air__info {
  background-color: $white;
  border-radius: 10px;
}

.row__text {
  display: block;
  padding: 30px 40px;
  font-size: 20px;
  p {
    padding: 10px 0;
    line-height: 140%;
  }

  span,
  a {
    color: $blue;
    font-weight: 500;
  }
}

.row_clients__head {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 23px;
  margin-bottom: 10px;
  border-bottom: 1px solid $l-gray;
  width: 100%;
  h3 {
    font-size: 32px;
    font-weight: 600;
  }
  p {
    font-size: 20px;
    color: $red;
  }
}

.row__clients {
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
}

.row_clients__form {
  @include flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 23px 10px;
}

.input__col {
  max-width: 220px;
  :deep(.dp__input) {
    font-size: 16px !important;
    color: $gray;
    max-width: 150px;
  }
  p {
    margin-bottom: 4px;
  }
}

.note__col {
  width: 100%;
  border-bottom: 1px solid $l-gray;
  padding-bottom: 11px;
}

.row_clients_bottom {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form_btn {
  display: inline-flex;
  :deep(div) {
    width: auto;
  }
}

.info_row {
  background-color: transparent;
}
</style>
