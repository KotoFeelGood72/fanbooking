<template>
  <div class="confirm">
    <div class="container">
      <div class="confirm_head">
        <h1>Подтвердите бронирование авиабилета для визы</h1>
        <p>Проверьте введенные данные</p>
      </div>
      <div class="confirm_main__w">
        <div class="confirm_main">
          <div class="confirm_list">
            <div class="confirm_details">
              <div class="confirm_details__head">
                <div class="confirm_details__title">
                  <h3>Детали перелета</h3>
                  <p>28 фев, 2024, 02:00, ср - 28 фев, 2024, 09:10, ср</p>
                </div>
                <div class="confirm_detailsHead__logo">
                  <img src="../../../assets/img/airlogo.png" alt="" />
                </div>
              </div>
              <div class="confirm_details__info">
                <p>Москва - Дубай</p>
                <ul>
                  <li>Рейс: G9951</li>
                  <li>Выполняет: Air Arabia</li>
                  <li>Эконом</li>
                  <li>Без багажа</li>
                  <li>Посадка: 02:00, Москва VKO</li>
                  <li>Прибытие: 09:10, Дубай VNB</li>
                  <li>Время в пути: 7ч 30 мин</li>
                </ul>
              </div>
            </div>
            <div class="confirm_transfer">
              <h3>Данные пассажиров</h3>
              <ul>
                <li>
                  <span>1 пассажир</span>
                  <p>Смирнов Артем</p>
                </li>
                <li>
                  <span>дата рождения</span>
                  <p>19.06.1993</p>
                </li>
              </ul>
            </div>
            <div class="confirm_note">
              При нахождении опечатки в данных вернитесь на предыдущую страницу
              для исправления
            </div>
            <div class="confirm_total">
              <div class="confirm_total__price">
                <p>Итого:</p>
                <span>550 ₽ </span>
              </div>
              <div class="confirm__payments">
                <p>Выберите способ оплаты:</p>
              </div>
              <div class="confirm__buttons">
                <Buttons
                  name="Банковской картой 550 ₽ "
                  size="medium"
                  sheme="secondary"
                />
                <Buttons
                  name="Оплата СБП по QR-коду 550 ₽  "
                  size="medium"
                  sheme="secondary"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="confirm__sidebar">
          <h4>Ваше бронирование</h4>
          <ul>
            <li>
              <div class="left_col">
                <div class="list-icon">
                  <img src="../../../assets/img/document.png" alt="" />
                </div>
                <div class="left_col__title">
                  <p>Маршрутная квитанция</p>
                  <span>1 пассажир</span>
                  <span>1 направление(Москва - Дубай)</span>
                </div>
              </div>
              <div class="right_col">
                <p>550 ₽</p>
              </div>
            </li>
            <li>
              <div class="left_col">
                <div class="list-icon">
                  <img src="../../../assets/img/time.png" alt="" />
                </div>
                <div class="left_col__title">
                  <p>Время действия брони</p>
                  <span>с 22 фев, 2024 по 08 мар, 2023</span>
                </div>
              </div>
              <div class="right_col">
                <p>10 дней</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Buttons from "~/components/ui/Buttons.vue";
</script>

<style scoped lang="scss">
.confirm {
  background-color: $light;
  padding-bottom: 269px;
  padding-top: 20px;

  @include bp($point_2) {
    padding-bottom: 60px;
    padding-top: 0;
  }
}

.confirm_main {
  width: 100%;
  @include bp($point_2) {
    order: 1;
  }
}
.confirm_list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.confirm_main__w {
  @include flex-space;
  align-items: flex-start;
  gap: 20px;

  @include bp($point_2) {
    flex-direction: column;
  }
}

.confirm__sidebar {
  background-color: $white;
  border-radius: 10px;
  max-width: 382px;
  box-shadow: 0px 2px 15.4px 0px rgba(0, 0, 0, 0.09);
  padding: 30px 20px;
  width: 100%;
  position: sticky;
  top: 20px;
  right: 0;

  @include bp($point_2) {
    position: static;
    order: 0;
    padding: 20px 10px;
  }

  h4 {
    margin-bottom: 14px;
    font-size: 24px;
  }
  ul {
    li {
      @include flex-space;
      align-items: flex-start;
      &:not(:last-child) {
        margin-bottom: 13px;
      }
    }
  }
}

.left_col {
  @include flex-start;
  align-items: flex-start;
  gap: 4px;
  font-size: 14px;
  p {
    font-weight: 600;
    margin-bottom: 2px;
  }
  span {
    font-size: 10px;
    color: $gray;
    display: block;
  }
}

.right_col {
  p {
    font-size: 14px;
    font-family: "Open-Sans", sans-serif;
    font-weight: 500;
  }
}

.confirm_head {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 27px;
  @include bp($point_2) {
    gap: 10px;
  }
  h1 {
    font-size: 32px;
    @include bp($point_2) {
      font-size: 20px;
    }
  }
  p {
    font-size: 24px;
    @include bp($point_2) {
      font-size: 16px;
    }
  }
}

.confirm_transfer {
  h3 {
    font-size: 32px;
    margin-bottom: 12px;
    @include bp($point_2) {
      font-size: 20px;
    }
  }
  ul {
    li {
      font-size: 14px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
      grid-gap: 8px 20px;
      max-width: 300px;
      &:not(:last-child) {
        margin-bottom: 11px;
      }
    }
    span {
      color: $gray;
    }
  }
}

.confirm_details,
.confirm_transfer,
.confirm_total {
  background-color: $white;
  border-radius: 10px;
  box-shadow: 0px 2px 15.4px 0px rgba(0, 0, 0, 0.09);
  padding: 24px;
}

.confirm_details__head {
  @include flex-space;
  gap: 20px;
  margin-bottom: 10px;
  @include bp($point_2) {
    align-items: flex-start;
    margin-bottom: 23px;
  }
  h3 {
    font-size: 32px;
    margin-bottom: 7px;
    @include bp($point_2) {
      font-size: 20px;
    }
  }
  p {
    color: $gray;
    @include bp($point_2) {
      max-width: 100%;
      opacity: 0.7;
    }
  }
}

.confirm_detailsHead__logo {
  max-width: 117px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.confirm_details__info {
  p {
    color: $blue;
    font-weight: 600;
    margin-bottom: 8px;
    @include bp($point_2) {
      display: none;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
    grid-gap: 8px 40px;
    max-width: 429px;
    color: $gray;
    font-size: 14px;
    @include bp($point_2) {
      max-width: 100%;
      opacity: 0.7;
    }
    li {
      &:nth-child(4) {
        @include bp($point_2) {
          margin-bottom: 23px;
        }
      }
    }
  }
}

.list-icon {
  margin-top: -7px;
}

.confirm_total__price {
  @include flex-start;
  font-weight: 700;
  gap: 20px;
  margin-bottom: 15px;
  @include bp($point_2) {
    gap: 10px;
  }
  p {
    font-size: 24px;
    @include bp($point_2) {
      font-size: 16px;
    }
  }
  span {
    font-family: "Open-Sans", sans-serif;
    font-size: 40px;
    @include bp($point_2) {
      font-size: 24px;
    }
  }
}

.confirm__payments {
  p {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 20px;
  }
}

.confirm__buttons {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  grid-gap: 20px;

  @include bp($point_2) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    gap: 10px;
  }
}

.confirm_total {
  padding: 24px 24px 40px 24px;
  @include bp($point_2) {
    padding: 15px 10px;
  }
}
</style>
