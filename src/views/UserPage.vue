<template>
  <div class="page">
    <h1 class="navbar__heading">
      User Data:
    </h1>
    <nav class="navbar">
      <ul class="navbar__list">
        <li class="navbar__li">
          {{ userData.id }}
        </li>
        <li class="navbar__li">
          {{ userData.username }}
        </li>
        <li class="navbar__li">
          {{ userToken }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { getItem } from "@/helpers/storage";

const store = useStore();

const userData = computed(() => store.getters.userData);
const userToken = computed(() => getItem("token"));
</script>

<style lang="scss" scoped>
.page{
  padding: 20px;
}
.navbar {
  width: 90%;
  height: 100%;
  margin: 0 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__heading{
    font-size: 1.2rem;
    color: $white;
  }

  &__list{
    display: flex;
    flex-wrap: wrap;
  }

  &__li{
    margin-right: 30px;
    margin: 10px 0;
    color: $white;
    font-size: 1rem;
    color: $gray-light;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 200px
  }
}
</style>
