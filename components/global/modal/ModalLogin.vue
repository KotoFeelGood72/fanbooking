<template>
  <div class="login">
    <div class="modal_bg" @click="closeModal('login')"></div>
    <div class="login_main">
      <div class="close_modal" @click="closeModal('login')">
        <img src="../../../assets/sprite/svg/closer.svg" alt="" />
      </div>
      <div class="login_head">
        <h3>Войдите в профиль</h3>
        <p>Чтобы обращаться в поддержку и следить за ценами на нужные билеты</p>
      </div>
      <div class="login_form">
        <Inputs placeholder="E-mail" type="email" />
        <Inputs placeholder="Пароль" type="password" />
        <Buttons name="Войти" @click="pushAccount()" />
        <div class="reset_pass" @click="changeModal">Забыли пароль?</div>
      </div>
      <Buttons
        name="Создать новый аккаунт"
        sheme="secondary"
        @click="openSign"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Inputs from "~/components/ui/Inputs.vue";
import Buttons from "~/components/ui/Buttons.vue";
import { useModalStore } from "~/store/useModalStore";
import { useRouter } from "vue-router";

const { closeModal, openModal } = useModalStore();
const router = useRouter();

function pushAccount() {
  closeModal("login");
  router.push("/account");
}

function changeModal() {
  closeModal("login");
  openModal("resets");
}

function openSign() {
  closeModal("login");
  openModal("sign");
}
</script>

<style scoped lang="scss">
.login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @include flex-center;
  z-index: 101;

  @include bp($point_2) {
    padding: 20px;
  }
}

.modal_bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $black;
  opacity: 0.4;
  backdrop-filter: blur(20px);
}

.login_main {
  position: relative;
  background-color: $white;
  max-width: 484px;
  border-radius: 13px;
  padding: 49px 62px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @include bp($point_2) {
    max-width: 100%;
    padding: 30px 20px;
    max-width: 100%;
  }
}

.login_form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
}

.reset_pass {
  color: $blue;
  cursor: pointer;
}

.login_head {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    font-size: 28px;
  }
  p {
    color: $gray;
  }
}

.close_modal {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  @include flex-center;
  cursor: pointer;
}
</style>
