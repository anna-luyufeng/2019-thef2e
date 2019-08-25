<template>
  <transition name="modal">
    <div :class="$style['modal-mask']">
      <div :class="$style['modal-wrapper']">
        <div :class="$style.close" @click="$emit('close')">
          <div :class="$style['close__bar']"></div>
          <div :class="$style['close__bar']"></div>
        </div>
        <div :class="$style['modal-header']">
          <slot name="header"></slot>
        </div>
        <div :class="$style['modal-body']">
          <slot></slot>
        </div>
        <div :class="$style['modal-footer']">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" module>
@import "@design";
:global {
  .modal-enter,
  .modal-leave-active {
    opacity: 0;
  }
}
.modal {
  &-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
  }
  &-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 50%;
    padding: 30px;
  }
  &-header {
    margin-bottom: 20px;
  }
  &-body {
    font-weight: 400;
    text-align: initial;
    color: $color-text-primary;
    letter-spacing: 0.05em;
    line-height: 1.5;
  }
}
.close {
  height: 20px;
  width: 20px;
  position: absolute;
  right: 30px;
  &__bar {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    width: 1px;
    transform: translate(-50%, -50%);
    transition: all 0.5s cubic-bezier(0, 0.785, 0, 1);
    background-color: $color-text-primary;
    cursor: pointer;
    &:nth-child(1) {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:nth-child(2) {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
  &:hover .close__bar {
    background-color: $color-primary;
  }
}
</style>
