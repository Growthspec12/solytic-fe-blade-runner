<template>
  <span class="loader" />
</template>

<style lang="scss" scoped>
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid $white;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  margin: 10px 0;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
