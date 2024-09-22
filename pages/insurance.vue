<template>
  <div class="insurance">
    <div class="container">
      <div class="insurance_main">
        <div class="insurance__head">
          <h1>Бронирование страховки</h1>
          <p>Заполните личные данные</p>
        </div>
        <div class="insurance__details">
          <h3 class="insurance-title">Детали страховки</h3>
          <ul>
            <li>
              <p>Страна:</p>
              <span>Италия</span>
            </li>
            <li>
              <p>Начало страховки:</p>
              <span>22.02.2023</span>
            </li>
            <li>
              <p>Конец страховки:</p>
              <span>22.03.2023</span>
            </li>
            <li>
              <p>Кличество дней:</p>
              <span>30</span>
            </li>
            <li>
              <p>Гражданство:</p>
              <span>Россия</span>
            </li>
            <li class="danger">
              NOTE: сейчас не можем обрабатывать перс.данные граждан других стран, кроме
              РФ. Позднее сможем.
            </li>
          </ul>
        </div>
        <div class="list_insurance">
          <div class="list_insurance__head">
            <h3 class="insurance-title">Список застрахованных</h3>
            <p class="danger">Данные вводить латиницей, как в загранпаспорте</p>
          </div>
          <div class="list_added__insurance">
            <div
              class="list_insurance__row"
              v-for="(traveler, index) in travelers"
              :key="'traveler-' + index"
            >
              <p>Путешественник {{ index + 1 }} (Страхователь)</p>
              <div class="list_col">
                <p>Фамилия</p>
                <Inputs v-model="traveler.lastName" />
              </div>
              <div class="list_col">
                <p>Имя</p>
                <Inputs v-model="traveler.firstName" />
              </div>
              <div class="list_col">
                <p>Дата рождения</p>
                <InputSoloDate v-model="traveler.birthDate" />
              </div>
              <div class="list_col">
                <p>Ваш E-mail</p>
                <Inputs v-model="traveler.email" />
              </div>
            </div>
            <div class="insurance_note">
              Бронирование отправим на указанный E-mail. Также оно будет доступно в личном
              кабинете
            </div>
            <div class="added" @click="addRow">
              <img src="../assets/sprite/svg/plus.svg" alt="" />
              <p>Добавить путешественника</p>
            </div>
          </div>
        </div>
        <div class="insurance__text">
          <p>
            Из-за действующих ограничительных мер со стороны ЕС российские полисы не
            принимаются всеми консульствами стран Евросоюза – при наступлении страхового
            случая лечебное учреждение не сможет получить выплату от российского
            страховщика.
          </p>
          <p>
            Приобретите с нами полис медицинского страхования только от страховых
            компаний, расположенных в Европе. Мы работаем с компаниями Франции и Германии,
            Нидерландов и Италии.
          </p>
          <p>
            С помощью fun-booking.ru вы приобретете полис с покрытием расходов, которые
            могут возникнуть в связи с репатриацией по медицинским причинам, срочной
            медицинской помощью, экстренной госпитализацией или смертью заявителя во время
            пребывания. 
          </p>
          <strong>Страховое покрытие не менее 30.000 евро. </strong>
          <p>
            Пожалуйста, приносите на подачу документов визы полис, распечатанный в цвете
          </p>
        </div>
        <div class="insurance_type">
          <div class="insurance_type__head">
            <h3 class="insurance-title">Тип страхования</h3>
            <p>Выберите необходимый вам тип страхования</p>
          </div>
          <div class="insurance_type__select">
            <div class="type_select">
              <Checkboxes
                id="type-1"
                label="Туризм / бизнес-виза / посещение членов семьи (до 90 дней)"
                v-model="selectedType"
                mode="radio"
                name="types"
              />
              <Checkboxes
                id="type-2"
                label="Студенческое, au-pair, assurance au 1er Euro, internship страхование"
                v-model="selectedType"
                mode="radio"
                name="types"
              />
              <Checkboxes
                id="type-3"
                label="Длительное пребывание (более 90 дней)"
                v-model="selectedType"
                mode="radio"
                name="types"
              />
              <Checkboxes
                id="type-4"
                label="Туристическое страхование для лиц зрелого возраста (от 66 лет)"
                v-model="selectedType"
                mode="radio"
                name="types"
              />
            </div>
            <div class="type_select" v-if="selectedType === 'type-2'">
              <p>Выберите вид полиса</p>
              <Checkboxes
                id="window-1"
                label="Au pair"
                v-model="selectedSubType"
                mode="radio"
                name="subTypes"
              />
              <Checkboxes
                id="window-2"
                label="Assurance au 1er Euro"
                v-model="selectedSubType"
                mode="radio"
                name="subTypes"
              />
              <Checkboxes
                id="window-3"
                label="Internship or Academic exchange"
                v-model="selectedSubType"
                mode="radio"
                name="subTypes"
              />
              <Checkboxes
                id="window-4"
                label="Студенческий (полис на 90 дней)"
                v-model="selectedSubType"
                mode="radio"
                name="subTypes"
              />
              <Checkboxes
                id="window-5"
                label="Студенческий (годовой полис)"
                v-model="selectedSubType"
                mode="radio"
                name="subTypes"
              />
            </div>
            <div class="insurance__total">
              <p>сумма покрытия не менее 30.000 EUR</p>
              <div class="insurance__actions">
                <a href="#" download>
                  <img src="../assets/sprite/svg/download.svg" alt="" />
                  <span>Скачать условия</span>
                </a>
              </div>
            </div>
            <div class="payment_btn">
              <Buttons name="Перейти к оплате" class="custom-padding-xxl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Inputs from "~/components/ui/Inputs.vue";
import InputSoloDate from "~/components/ui/InputSoloDate.vue";
import Checkboxes from "~/components/ui/Checkboxes.vue";
import Buttons from "~/components/ui/Buttons.vue";

const travelers = ref([{ lastName: "", firstName: "", birthDate: "", email: "" }]);

const selectedType = ref<string>("type-1");
const selectedSubType = ref<string>("window-1");

function addRow() {
  travelers.value.push({ lastName: "", firstName: "", birthDate: "", email: "" });
}
</script>

<style scoped lang="scss">
.insurance {
  background-color: $light;
  padding-bottom: 120px;
}

.insurance__head {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 36px;
  h1 {
    font-size: 32px;
  }
}

.insurance__details {
  background-color: $white;
  padding: 20px 40px;
  border-radius: 10px;
}

.list_insurance,
.insurance__text,
.insurance_type {
  background-color: $white;
  padding: 20px 40px;
  border-radius: 10px;
  margin-top: 20px;
}

.list_insurance__head {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 23px;
  border-bottom: 1px solid $l-gray;
  margin-bottom: 30px;
  h3 {
    font-size: 32px;
  }
  p {
    color: $red;
    font-size: 20px;
  }
}

.list_insurance__row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.added {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px 0;
  color: $blue;
  gap: 10px;
  img {
    width: 14px;
    height: 14px;
  }
}

.insurance-title {
  font-size: 32px;
  margin-bottom: 11px;
}

.insurance__details {
  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 118px;
    gap: 11px 100px;
    max-width: 820px;
    font-size: 14px;
    li {
      display: flex;
      align-items: center;
      gap: 20px;
      p {
        color: $gray;
        font-weight: 600;
        min-width: 140px;
      }
      span {
        font-weight: 600;
      }
    }
  }
}

.danger {
  max-width: 442px;
  color: $red;
  font-weight: 600;
}

.list_insurance__head {
  p {
    font-weight: 500;
    max-width: 100%;
  }
}
.list_insurance__row {
  max-width: 830px;
  & > p {
    flex-grow: 1;
    width: 100%;
    font-size: 20px;
    margin-bottom: 20px;
  }

  :deep(.dp__input_wrap) {
    max-width: 140px;
  }
  :deep(.input) {
    max-width: 220px;
  }
}

.list_col {
  p {
    margin-bottom: 5px;
  }
}

.insurance_note {
  border-bottom: 1px solid $l-gray;
  padding-bottom: 11px;
}

.insurance__text {
  font-weight: 600;
  p {
    padding: 10px 0;
    font-weight: 500;
  }
  strong {
    font-weight: 700;
  }
}

.insurance_type__head {
  margin-bottom: 20px;
  p {
    font-weight: 600;
  }
}
.type_select {
  p {
    font-weight: 600;
  }
}

.type_select {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid $l-gray;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.insurance__total {
  p {
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
}

.insurance__actions {
  margin-bottom: 20px;
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: $blue;
    img {
      width: 15px;
      height: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.payment_btn {
  display: inline-flex;
}
</style>
