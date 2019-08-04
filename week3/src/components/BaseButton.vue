<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default',
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<template>
  <button class="button" :class="[`button--${type}`, {'button--block': block}]" v-on="$listeners">
    <slot></slot>
  </button>
</template>
<style lang="scss">
@import '@design';
.button {
  box-sizing: content-box;
  padding: 0 10px;
  outline: none;
  border: 3px solid $color-primary;
  height: 40px;
  background-color: white;
  box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.2), 1px 1px 0 0 $color-primary-light,
    2px 2px 0 0 $color-primary-light, 3px 3px 0 0 $color-primary-light,
    4px 4px 0 0 $color-primary-light, 5px 5px 0 0 $color-primary,
    6px 6px 0 0 $color-primary;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all $duration-transition-base;
  will-change: transform, box-shadow;
  cursor: pointer;

  &--circle {
    padding: 0;
    border-radius: 50%;
    width: 40px;
  }
  &--block {
    display: block;
    width: 100%;
  }
  + .button {
    margin-top: 25px;
  }

  &:hover,
  &--active {
    transform: translate(2px, 5px);
    box-shadow: inset 2px 2px 0px 1px $color-primary;
    background-color: #dfdfdf;
    > .button__icon {
      transform: translate(2px, 2px);
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transition: all $duration-transition-base linear;
    background-color: transparent;
    bottom: -15px;
  }
  &--active:before {
    background-color: $color-primary;
  }
  &--active-track:after {
    content: '1';
    margin-left: 5px;
    font-size: 10px;
  }
  &__icon {
    width: 50%;
    transition: all $duration-transition-base;
  }
}
</style>
