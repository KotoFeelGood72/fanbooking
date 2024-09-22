<template>
  <div class="reserv">
    <div class="container">
      <div class="reserv_main">
        <div class="reserv_head">
          <h1>Получить проверяемое бронирование отеля</h1>
          <p>
            Заполните сведения о поездке, и мы пришлём подтверждение
            бронирования
          </p>
        </div>
        <div class="reserv_content">
          <div class="reserv_form">
            <DefaultSelect
              placeholder="Город, аэропорт"
              :options="cities"
              v-model="reservForm.city"
              :arrow="true"
            />
            <InputSoloDate v-model="reservForm.dateTo" mode="заезд" />
            <InputSoloDate v-model="reservForm.dateFrom" mode="заезд" />
            <Inputs placeholder="Email" v-model="reservForm.email" />
          </div>
          <div class="reserve_content__head">
            <h3>Гости</h3>
            <p>Данные вводить латиницей, как в загранпаспорте</p>
          </div>
          <div class="reserve_details">
            <ListAdded
              title="Взрослый"
              :inputs="adultInputs"
              name="взрослого"
              type="adult"
            />
            <ListAdded
              title="Ребенок (до 17 лет включительно)"
              :inputs="childInputs"
              name="ребенка"
              type="child"
            />
            <div class="reserv_object">
              <p>Выберите обьект проживания:</p>
              <ul>
                <li>
                  <Checkboxes
                    id="object-1"
                    label="Отель 3*"
                    v-model="reservForm.object"
                    mode="radio"
                    name="object"
                  />
                </li>
                <li>
                  <Checkboxes
                    id="object-2"
                    label="Отель 4*"
                    v-model="reservForm.object"
                    mode="radio"
                    name="object"
                  />
                </li>

                <li>
                  <Checkboxes
                    id="object-3"
                    label="Отель 5*"
                    v-model="reservForm.object"
                    mode="radio"
                    name="object"
                  />
                </li>
                <li>
                  <Checkboxes
                    id="object-4"
                    label="Апартаменты"
                    v-model="reservForm.object"
                    mode="radio"
                    name="object"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="reserve_bottom">
            <Checkboxes
              id="terms"
              label="Согласен с условиями"
              v-model="reservForm.terms"
            />
            <div class="reserve_btn">
              <Buttons
                name="Продолжить"
                size="medium"
                class="custom-padding-xxl"
                @click="pushHotelOrder()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Inputs from "~/components/ui/Inputs.vue";
import InputSoloDate from "~/components/ui/InputSoloDate.vue";
import DefaultSelect from "~/components/ui/DefaultSelect.vue";
import ListAdded from "~/components/list/ListAdded.vue";
import Checkboxes from "~/components/ui/Checkboxes.vue";
import Buttons from "~/components/ui/Buttons.vue";
import { useRouter } from "vue-router";
import { cities } from "~/consts/country";

const reservForm = ref<any>({
  dateTo: "",
  dateFrom: "",
  city: "",
  email: "",
  object: false,
  terms: false,
});

const adultInputs = ref([
  [
    { val: "", label: "Фамилия" },
    { val: "", label: "Имя" },
  ],
]);
const childInputs = ref([
  [
    { val: "", label: "Фамилия" },
    { val: "", label: "Имя" },
    { val: "", label: "Возраст" },
  ],
]);

const router = useRouter();

function pushHotelOrder() {
  router.push("/hotel/1/confirm");
}
</script>

<style scoped lang="scss">
.reserv {
  background-color: $light;
  padding-bottom: 80px;
  @include bp($point_2) {
    padding-bottom: 60px;
  }
}

.reserv_head {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 36px;
  h1 {
    font-size: 32px;
    @include bp($point_2) {
      font-size: 20px;
    }
  }
}

.reserv_content {
  background-color: $white;
  padding: 20px 40px 78px 40px;
  border-radius: 10px;

  @include bp($point_2) {
    padding: 15px 10px;
  }
}

.reserv_form {
  @include flex-center;
  gap: 10px;
  border: 1px solid #cecece;
  border-radius: 5px;
  background-color: $light;
  padding: 17px 135px;
  margin-bottom: 11px;

  @include bp($point_2) {
    flex-wrap: wrap;
    padding: 10px;
    margin-bottom: 20px;
  }

  :deep(.custom-select) {
    max-width: 260px;
    @include bp($point_2) {
      max-width: 100%;
    }
    span {
      font-size: 16px;
    }
  }
  :deep(.input) {
    max-width: 220px;
    @include bp($point_2) {
      max-width: 100%;
    }
  }
  :deep(.dp__input) {
    width: 160px;
    @include bp($point_2) {
      width: 100%;
    }
  }
}

.reserve_content__head {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 23px;
  border-bottom: 1px solid $l-gray;
  margin-bottom: 30px;
  @include bp($point_2) {
    padding-bottom: 16px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 32px;
    @include bp($point_2) {
      font-size: 20px;
    }
  }
  p {
    color: $red;
    font-size: 20px;
    @include bp($point_2) {
      font-size: 16px;
    }
  }
}

.reserve_details {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.reserv_object {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid $l-gray;
  padding-bottom: 34px;
  margin-bottom: 17px;
  & > p {
    font-weight: 600;
  }

  ul {
    @include flex-start;
    flex-wrap: wrap;
    gap: 10px 20px;
    max-width: 270px;
  }
}

.reserve_bottom {
  display: inline-flex;
  flex-direction: column;
  gap: 17px;
}

.reserve_btn {
  display: inline-flex;
}

.air-date {
  @include bp($point_2) {
    max-width: 48%;
  }
}
</style>
