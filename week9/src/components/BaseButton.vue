<script>
export default {
  props: {
    type: {
      type: String,
      default: ""
    }
  }
};
</script>
<template>
  <button
    :class="[$style.button, { [$style[`button--${type}`]]: type }]"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>
<style lang="scss" module>
@import "@design";

.button {
  color: $color-primary;
  background: white;
  padding: 12px 30px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 900;
  cursor: pointer;
  outline: none;
  border: none;
  letter-spacing: 0.1rem;
  width: 100%;
  &:hover {
    // background: $color-button-hover-background;
  }
  & + .button {
    // margin-left: 15px;
  }
  &--text {
    background: transparent;
  }
}
</style>
