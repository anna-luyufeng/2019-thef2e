<script>
import Layout from '@layouts/main'
export default {
  components: {
    Layout,
  },
}
</script>
<template>
  <Layout>
    <div :class="$style.wrapper">
      <Transition appear>
        <a-spin :class="$style.spinner" />
      </Transition>
    </div>
  </Layout>
</template>

<style lang="scss" module>
@import '@design';

.wrapper {
  height: 100%;
  width: 100%;
  text-align: center;
}
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // stylelint-disable-next-line selector-class-pattern
  &:global(.v-enter-active) {
    transition: opacity 1s;
  }
  // stylelint-disable-next-line selector-class-pattern
  &:global(.v-enter) {
    opacity: 0;
  }
}
</style>