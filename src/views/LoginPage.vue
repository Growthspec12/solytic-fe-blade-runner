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
      <app-input
        input-type="text"
        :img-link="profileImg"
        placeholder="Username"
        @input="inputUserName"
        :value="user.username"
        :class="{'form__input-error': !isUserNameCorrect}"
      />
      <app-input
        input-type="password"
        :img-link="lockImg"
        placeholder="Password"
        @input="inputPassword"
        :value="user.password"
        :class="{'form__input-error': !isPasswordCorrect}"
      />

      <app-button
        text="Sign in"
        type="submit"
        :disabled="!isUserNameCorrect || !isPasswordCorrect "
      />
      <p class="form__text">
        Not a member? <a
          class="form__link"
          href="/"
        >Sign up</a>
      </p>
    </form>

    <app-popup
      :close-popup="closePopup"
      v-if="isPopupVisible"
    >
      <h2 class="heading">
        User ID: {{ userData.id }}
      </h2>
    </app-popup>
  </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/AppButton.vue";
import AppInput from "@/components/AppInput.vue";
import AppPopup from "@/components/AppPopup.vue";
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const loginError = computed(() => store.getters.loginError);
const userData = computed(() => store.getters.userData);
const resetError = () => store.dispatch("resetError");
const login = async (user) => await store.dispatch("login", user);
const profileImg = computed(() => "https://cdn-icons-png.flaticon.com/512/1250/1250689.png");
const lockImg = computed(() => "https://cdn-icons-png.flaticon.com/512/2889/2889676.png");

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
  resetError();
}

function inputPassword (value: string) {
  isPasswordCorrect.value = true;
  const regex = /^(?=.{8,}).+$/;
  user.password = value;
  isPasswordCorrect.value = regex.test(user.password);
  resetError();
}

const isPopupVisible = ref(false);
function showPopup () {
  isPopupVisible.value = true;
}
function closePopup () {
  isPopupVisible.value = false;
  router.push({ name: "user" });
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

  await login(user);

  if (!loginError.value) {
    user.username = "";
    user.password = "";
    showPopup();
  }
}
</script>

<style lang="scss" scoped>
.page{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
</style>
