<template>
  <div class="page">
    <form class="form">
      <AppInput
        input-type="text"
        img-link="user.png"
        placeholder="Username"
        @input="inputUserName"
        :value="userName"
        :class="{'form__input-error': !isUserNameCorrect}"
      />
      <AppInput
        input-type="password"
        img-link="lock.png"
        placeholder="Password"
        @input="inputPassword"
        :value="password"
        :class="{'form__input-error': !isPasswordCorrect}"
      />
      <AppButton
        text="Sign in"
        type="submit"
        :disabled="!isUserNameCorrect || !isPasswordCorrect "
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
import { ref } from "vue";
import AppButton from "../components/AppButton.vue";
import AppInput from "../components/AppInput.vue";

const userName = ref("");
const password = ref("");
const isUserNameCorrect = ref(true);
const isPasswordCorrect = ref(true);

function inputUserName (value: string) {
  isUserNameCorrect.value = true;
  const regex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
  userName.value = value;
  isUserNameCorrect.value = regex.test(userName.value);
}
function inputPassword (value: string) {
  isPasswordCorrect.value = true;
  const regex = /^(?=.{8,}).+$/;
  password.value = value;
  isPasswordCorrect.value = regex.test(password.value);
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
