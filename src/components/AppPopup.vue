<template>
  <div class="popup">
    <div class="popup__inner">
      <slot />
      <app-button
        type="button"
        text="Close"
        :disabled="false"
        @click="closePopup()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from "./AppButton.vue";

defineProps({
  closePopup: {
    type: Function,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.popup{
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner{
    background-color: $blue-gray;
    border-radius: 10px;
    padding: 30px;
  }
}
</style>
