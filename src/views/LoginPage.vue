<template>
  <div class="page">
    <form class="form">
      <AppInput
        input-type="text"
        img-link="user.png"
        placeholder="Username"
        @input="inputLogin"
        :value="userData.login"
        :class="{'form__input-error': !isLoginCorrect}"
      />
      <AppInput
        input-type="password"
        img-link="lock.png"
        placeholder="Password"
        @input="inputPassword"
        :value="userData.password"
        :class="{'form__input-error': !isPasswordCorrect}"
      />
      <AppButton
        text="Sign in"
        type="submit"
        :disabled="!isLoginCorrect || !isPasswordCorrect "
      />
      <p class="form__text">
        Not a member? <a
          class="form__link"
          href="/signup"
        >Sign up</a>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { User } from "../types/Login";
import { computed } from "vue";
import { useStore } from "vuex";
import AppButton from "../components/AppButton.vue";
import AppInput from "../components/AppInput.vue";

const store = useStore();

const isLoginCorrect = computed<boolean>(() => store.getters.isLoginCorrect);
const isPasswordCorrect = computed<boolean>(() => store.getters.isPasswordCorrect);
const userData = computed<User>(() => store.getters.userData);

function inputLogin (login: string) {
  store.dispatch("updateLogin", login);
}
function inputPassword (password: string) {
  store.dispatch("updatePassword", password);
}
</script>

<style lang="scss" scoped>
.page{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $page-bg;
  height: 100%;
  min-height: 100vh;
  padding: 10px;
}
</style>
