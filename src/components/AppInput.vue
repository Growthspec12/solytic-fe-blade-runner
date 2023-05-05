<template>
  <label class="label">
    <div class="label__img-container">
      <img
        class="label__img"
        :src="imgLink"
        alt=""
      >
    </div>
    <input
      class="label__input"
      :type="inputType"
      :placeholder="placeholder"
      @input="emitInput"
      :value="value"
    >
  </label>
</template>

<script setup lang="ts">

const emit = defineEmits(["input"]);
defineProps({
  inputType: {
    type: String,
    required: true
  },
  imgLink: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true,
    default: ""
  }
});
// const imagePath = ref(`/assets/${props.imgLink}`);

function emitInput (event: Event) {
  if (event.target) {
    emit("input", event.target.value);
  }
}
</script>

<style lang="scss" scoped>
.label{
  width: 100%;
  min-width: 100px;
  height: 60px;
  display: flex;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: $blue-gray;
  &__img-container{
    width: 60px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $blue-gray-dark;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &__img{
    width: 20px;
  }
  &__input{
    width: 100%;
    max-width: 500px;
    height: 100%;
    min-width: 60px;
    padding: 15px;
    border: none;
    outline: none;
    border-radius: inherit;
    font-size: 1.1rem;
    background: inherit;
    color: $white;
    &:focus{
      background-color: $blue-gray-active;
    }
  }
}
</style>
