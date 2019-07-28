<script>
export default {};
</script>
<template>
  <button :class="$style.button" v-on="$listeners">
    <slot />
  </button>
</template>
<style lang="scss" module>
@import "@design";

.button {
  color: $color-button-text;
  background: $color-button-background;
  padding: 12px 30px;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: 900;
  cursor: pointer;
  outline: none;
  border: none;
  &:hover {
    background: $color-button-hover-background;
  }
  & + .button {
    margin-left: 15px;
  }
}
</style>