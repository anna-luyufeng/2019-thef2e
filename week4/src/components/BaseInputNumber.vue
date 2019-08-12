<script>
export default {
  name: 'BaseInputNumber',
  props: {
    value: Number,
    min: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentValue: 0,
    }
  },
  computed: {
    minDisabled() {
      return this.value - 1 < this.min
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.currentValue = value
      },
    },
  },
  methods: {
    setCurrentValue(newValue) {
      if (newValue <= this.min) newValue = this.min
      this.currentValue = newValue
      this.$emit('input', newValue)
    },
  },
}
</script>
<template>
  <div class="input">
    <span
      class="input__button input__button--decrease"
      role="button"
      :class="{ 'input__button--disabled': minDisabled }"
      @click="setCurrentValue(currentValue - 1)"
    >−</span>
    <span
      class="input__button input__button--increase"
      role="button"
      @click="setCurrentValue(currentValue + 1)"
    >＋</span>
    <div class="input__text">{{ currentValue }}</div>
  </div>
</template>



<style  lang="scss">
@import '@design';
.input {
  position: relative;
  display: inline-block;
  width: 75px;

  &__text {
    width: 100%;
    background-color: #f6f6f6;
    border-radius: 40px;
    text-align: center;
    height: 25px;
    line-height: 25px;
  }
  &__button {
    position: absolute;
    width: 25px;
    height: 100%;
    border-radius: 50%;
    text-align: center;
    line-height: 25px;
    cursor: pointer;
    user-select: none;
    box-sizing: border-box;
    &--decrease {
      left: 0;
      background-color: white;
      color: $color-primary;
    }
    &--increase {
      right: 0;
      background-color: $color-primary;
      color: white;
    }
    &--disabled {
      background-color: transparent;
      border: 1px solid white;
      color: white;
    }
  }
}
</style>


