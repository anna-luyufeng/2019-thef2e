<script>
import { LoaderIcon } from "vue-feather-icons";

export default {
  components: {
    LoaderIcon
  },
  props: {
    type: {
      type: String,
      default: "default"
    },
    fancy: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<template>
  <button
    class="button"
    :class="[`button--${type}`, {'button--fancy': fancy}]"
    v-on="$listeners"
    :disabled="loading"
  >
    <loader-icon v-if="loading" size="1x" :class="{ 'is-loading' : loading }"></loader-icon>
    <slot></slot>
  </button>
</template>
<style lang="scss">
@import "@design";
.button {
  box-sizing: content-box;
  padding: 15px 25px;
  outline: none;
  border: none;
  background-color: #d8d8d8;
  color: $color-primary;
  transition: $all-transition;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: lighten($color-button-background, 20);
  }
  + .button {
    margin-left: 20px;
  }
  &--primary {
    background-color: $color-button-background;
    color: white;
  }
  &--fancy:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    left: 7px;
    top: 7px;
    background-size: auto auto;
    background-color: rgba(255, 255, 255, 0.3);
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 3px,
      $color-primary 3px,
      $color-primary 4px
    );
  }
}
.is-loading {
  animation: rotating 2s linear infinite;
}
@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
</style>
