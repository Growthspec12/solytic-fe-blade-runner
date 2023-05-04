<template>
  <button
    :type="type"
    class="button"
    :disabled="disabled"
    @click="$emit('click')"
    ref="button"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";

defineEmits(["click"]);
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

const button = ref<HTMLElement | null>(null);
onMounted(() => {
  nextTick(() => {
    if (button.value) {
      button.value.focus();
    }
  });
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
