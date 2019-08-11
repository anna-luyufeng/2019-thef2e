<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
  },
}
</script>
<template>
  <button
    :class="[$style.button, { [$style[`button--${type}`]]: type }]"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <div v-if="loading">
      <div :class="$style.spinner"></div>
    </div>
    <slot v-else />
  </button>
</template>
<style lang="scss" module>
@import '@design';

.button {
  color: $color-button-text;
  background: $color-button-background;
  padding: 5px 25px;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  border: none;
  font-weight: bold;
  &:disabled {
    background: $color-button-disabled-background;
  }
  &--outline {
    background: transparent;
    border: 1px solid white;
    color: white;
  }
}
.spinner {
  animation: spinner 1s linear infinite;
  border: 0.25em solid white;
  border-top-color: $color-primary;
  border-radius: 100%;
  display: block;
  height: 1em;
  width: 1em;
}
@keyframes spinner {
  100% {
    transform: rotate(1turn);
  }
}
</style>