<template>
  <div id="app">
    <transition name="router-animation">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
@import "~normalize.css/normalize.css";
@import "@design";

#app {
  font-family: $system-default-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-text-primary;
  line-height: 1.5;
}

a {
  text-decoration: none;
  color: $color-text-primary;
  transition: $color-transition-base;
  &:hover {
    color: lighten($color-text-primary, 20);
  }
}

.theme-white {
  color: white;
  a {
    color: white;
    &:hover {
      color: darken(white, 10);
    }
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
input {
  -webkit-appearance: none;
  background-image: none;
  border-radius: 4px;
  border: 1px solid $color-border-base;
  box-sizing: border-box;
  color: $color-primary;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  &:hover,
  &:focus {
    border-color: $color-primary;
  }
}
.router-animation-enter-active {
  animation: coming 1s;
  animation-delay: 0.5s;
  opacity: 0;
}
.router-animation-leave-active {
  animation: going 1s;
}
@keyframes going {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.vc-dot.is-today {
  background-color: $color-accent;
}
.vc-day-content.is-booked {
  border-radius: 0;
  font-weight: normal;
  pointer-events: none;
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
.animated {
  animation-duration: 0.8s;
  animation-fill-mode: both;
}
.animated-delay {
  animation-delay: calc(0.1s * var(--index));
}
.fadeInUp {
  animation-name: fadeInUp;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>
