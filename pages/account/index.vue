<template>
  <div class="profile">
    <div class="container">
      <h1>Личный кабинет пользователя</h1>
      <div class="profile_main">
        <ProfileSide />
        <div class="profile_content">
          <div class="profile_personal">
            <div class="profile_content__head">
              <h3>Личные данные</h3>
            </div>
            <div class="profile_personal__form">
              <div class="profile_personal__input">
                <p>Фамилия</p>
                <Inputs placeholder="Смирнов" />
              </div>
              <div class="profile_personal__input">
                <p>Имя</p>
                <Inputs placeholder="Смирнов" />
              </div>
              <div class="profile_personal__input">
                <p>Дата рождения</p>
                <InputSoloDate v-model="birthday" mode="дд.мм.гггг" />
              </div>
              <div class="profile_personal__input">
                <p>Ваш E-mail</p>
                <Inputs placeholder="Smirnov24@yandex.ru" />
              </div>
            </div>
          </div>
          <div class="profile_region">
            <div class="profile_content__head">
              <h3>Региональные</h3>
              <p>
                Нужны для отображения подходящих билетов и правил вьезда в
                страну
              </p>
            </div>
            <div class="profile_region__form">
              <div class="profile_region__input">
                <p>Страна</p>
                <DefaultSelect
                  placeholder="Россия"
                  :options="countries"
                  v-model="region.country"
                  :arrow="true"
                />
              </div>
              <div class="profile_region__input">
                <p>Гражданство</p>
                <DefaultSelect
                  placeholder="РФ"
                  :options="people"
                  v-model="region.people"
                  :arrow="true"
                />
              </div>
              <div class="profile_region__input">
                <p>Валюта</p>
                <DefaultSelect
                  placeholder="Евро"
                  :options="people"
                  v-model="region.people"
                  :arrow="true"
                />
              </div>
              <div class="profile_region__input">
                <p>Город проживания</p>
                <DefaultSelect
                  placeholder="Город проживания"
                  :options="people"
                  v-model="region.people"
                  :arrow="true"
                />
              </div>
            </div>
          </div>
          <div class="profile_conf">
            <div class="profile_content__head">
              <h3>Конфиденциальность</h3>
              <h6>Данные</h6>
            </div>
            <div class="profile_conf__delete">
              <button type="button">
                <p>Удалить профиль</p>
                <svg-icon name="chevron-right" />
              </button>
            </div>
            <div class="change__pass">Изменить пароль</div>
          </div>
          <div class="profile_logout">
            <svg-icon name="logout" />
            <p>Выйти из профиля</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileSide from "~/components/global/sidebars/ProfileSide.vue";
import InputSoloDate from "~/components/ui/InputSoloDate.vue";
import Inputs from "~/components/ui/Inputs.vue";
import DefaultSelect from "~/components/ui/DefaultSelect.vue";
import { countries, people } from "~/consts/country";

const birthday = ref();

const region = ref<any>({
  country: "",
  people: "",
});
</script>

<style scoped lang="scss">
.profile {
  padding: 40px 0;
  background-color: $light;
  h1 {
    font-size: 32px;
    margin-bottom: 27px;
    @include bp($point_2) {
      font-size: 20px;
      margin-bottom: 25px;
    }
  }
}
.profile_main {
  @include flex-start;
  align-items: flex-start;
  gap: 37px;
  @include bp($point_2) {
    flex-direction: column;
  }
}

.profile_content {
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.profile_personal,
.profile_conf,
.profile_region {
  border-radius: 10px;
  background: $white;
  padding: 27px 32px 47px 43px;

  @include bp($point_2) {
    padding: 15px 10px;
  }
}

.profile_content__head {
  width: 100%;
  border-bottom: 1px solid $l-gray;
  font-size: 28px;
  padding-bottom: 15px;
  margin-bottom: 17px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    @include bp($point_2) {
      font-size: 20px;
    }
  }
  & > p {
    color: $m-gray;
    font-size: 16px;
    font-weight: 500;
    font-family: "Open-Sans", sans-serif;
  }

  h6 {
    font-size: 20px;

    @include bp($point_2) {
      font-size: 16px;
      font-family: $font_2;
      font-weight: 500;
    }
  }
}

.profile_region__form {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  gap: 20px;

  @include bp($point_2) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
  p {
    margin-bottom: 4px;
  }
  :deep(.select-box) {
    span {
      font-size: 16px !important;
    }
  }
}

.profile_personal__form {
  @include flex-start;
  gap: 10px;

  @include bp($point_2) {
    flex-direction: column;
  }
  .profile_personal__input {
    @include bp($point_2) {
      width: 100%;
    }
    p {
      margin-bottom: 4%;
    }

    :deep(.dp__input) {
      font-size: 16px !important;
      max-width: 170px;
      @include bp($point_2) {
        max-width: 100%;
      }
    }
  }
}

.profile_conf__delete {
  padding-bottom: 20px;
  border-bottom: 1px solid $l-gray;
  margin-bottom: 20px;
  button {
    cursor: pointer;
    @include flex-space;
    height: 100%;
    width: 100%;
    .icons {
      width: 20px;
      height: 12px;
      @include flex-center;
    }
  }
}

.change__pass {
  color: $blue;
  cursor: pointer;
}

.profile_logout {
  @include flex-center;
  background-color: $l-gray;
  border-radius: 10px;
  padding: 12px;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  &:hover {
    background-color: $m-gray;
  }
  .icons {
    width: 18px;
    height: 20px;
  }
}
</style>
