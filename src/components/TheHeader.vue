<template>
  <header class="header">
    <nav class="header__nav">
      <router-link
        to="/login"
        class="header__link"
      >
        Login
      </router-link>
      <router-link
        to="/user"
        class="header__link"
      >
        User
      </router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: $blue-gray-dark;
  display: flex;
  justify-content: start;

  &__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 50px;
    height: 100%;
  }

  &__link {
    color: $gray-light;
    font-size: 1rem;
    margin-left: 10px;
    text-decoration: none;
  }
}
</style>
