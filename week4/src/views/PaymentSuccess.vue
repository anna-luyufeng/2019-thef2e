<script>
import BaseButton from '@components/BaseButton'

export default {
  name: 'PaymentSuccess',
  components: { BaseButton },
}
</script>
<template>
  <div>
    <div class="message">
      <img
        class="message__image"
        :src="require(`@src/assets/product_${Math.floor(Math.random() * 5) + 1}.svg`)"
      />
      <transition enter-active-class="animated  zoomIn" appear>
        <div class="message__body">
          <h3>Thank you for the purchase!</h3>
          <div class="message__meta">Ref.{{+new Date}}</div>
          <p>The food will soon be delivered to your designated place.</p>
        </div>
      </transition>
      <transition
        enter-active-class="animated slideInUp"
        leave-active-class="animated  slideOutDown"
        appear
      >
        <BaseButton type="outline" @click="$router.push({ name: 'home' })" >Back</BaseButton>
      </transition>
    </div>
  </div>
</template>
<style lang="scss">
@import '@design';
.message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  &__image {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    z-index: 1;
    width: 50%;
  }
  &__body {
    margin-top: 25%;
    margin-bottom: 75px;
    padding: 10px 25px;
    box-sizing: border-box;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: rgba(white, 0.8);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__meta {
    color: $color-primary-light;
  }
}
</style>