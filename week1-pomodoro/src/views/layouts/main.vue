<script>
import SideMenu from './sidemenu'

export default {
  components: { SideMenu },
  data() {
    return {
      collapsed: false,
    }
  },
}
</script>
<template>
  <a-layout>
    <a-layout-sider v-model="collapsed" :class="$style.sider" :trigger="null" collapsible>
      <a-avatar :size="64" icon="user" />
      <SideMenu />
      <a
        href="https://github.com/littlegreening/2019-thef2e/tree/master/week1-pomodoro"
        target="_blank"
      >
        <a-icon type="github" />
      </a>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :class="$style.header">
        <a-icon
          :class="$style.toggle"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content :style="{ minHeight: '100vh' }">
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<style lang="scss" module>
@import '@design';
.sider {
  // background-color: white;
  :global(.ant-layout-sider-children) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
}
.header {
  background-color: $color-primary;
  padding: 0;
}
.toggle {
  padding: 0 24px;
}
</style>
