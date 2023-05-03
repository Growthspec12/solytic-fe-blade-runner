<template>
  <button
    :type="type"
    class="button"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    required: true,
    default: false
  }
});
</script>

<style lang="scss" scoped>
.button{
  width: 100%;
  height: 60px;
  background-color: $pink;
  text-transform: uppercase;
  color: $white;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 1rem;

  &:disabled{
    background: $gray;
  }
}
</style>
