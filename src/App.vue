<template>
  <div v-if="isUserLoaded">
    <the-header />
    <router-view />
  </div>
  <div
    class="loader-container"
    v-else
  >
    <app-loader />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import AppLoader from "@/components/AppLoader.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const isUserLoaded = ref(true);
const checkToken = async () => await store.dispatch("checkToken");

async function initToken () {
  isUserLoaded.value = false;
  await checkToken();
  isUserLoaded.value = true;
}

onMounted(() => {
  initToken();
});
</script>

<style lang="scss" scoped>
</style>
