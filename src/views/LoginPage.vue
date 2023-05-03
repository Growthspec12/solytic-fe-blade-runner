<template>
  <div class="page">
    <form
      class="form"
      @submit.prevent="loginUser"
    >
      <p
        class="form__text form__text_error"
        v-if="loginError"
      >
        {{ loginError }}
      </p>
      <AppInput
        input-type="text"
        img-link="user.png"
        placeholder="Username"
        @input="inputUserName"
        :value="user.username"
        :class="{'form__input-error': !isUserNameCorrect}"
      />
      <AppInput
        input-type="password"
        img-link="lock.png"
        placeholder="Password"
        @input="inputPassword"
        :value="user.password"
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
import { ref, reactive, computed } from "vue";
import AppButton from "../components/AppButton.vue";
import AppInput from "../components/AppInput.vue";
import { useStore } from "vuex";

const store = useStore();

const loginError = computed(() => store.getters.loginError);

const user = reactive({
  username: "",
  password: ""
});

const isUserNameCorrect = ref(true);
const isPasswordCorrect = ref(true);

function inputUserName (value: string) {
  isUserNameCorrect.value = true;
  const regex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
  user.username = value;
  isUserNameCorrect.value = regex.test(user.username);
  store.dispatch("resetError");
}

function inputPassword (value: string) {
  isPasswordCorrect.value = true;
  const regex = /^(?=.{8,}).+$/;
  user.password = value;
  isPasswordCorrect.value = regex.test(user.password);
  store.dispatch("resetError");
}

async function loginUser () {
  if (!user.username.length) {
    isUserNameCorrect.value = false;
    return;
  }

  if (!user.password.length) {
    isPasswordCorrect.value = false;
    return;
  }

  await store.dispatch("login", user);

  if (!loginError.value) {
    user.username = "";
    user.password = "";
  }
}
</script>

<style lang="scss" scoped>
.page{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  padding: 10px;
}
</style>
