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
    <a-layout-sider
      v-model="collapsed"
      :class="$style.sider"
      :trigger="null"
      collapsible
    >
      <a-avatar :size="64" icon="user" />
      <SideMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header :class="$style.header">
        <a-icon
          :class="$style.toggle"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ padding: '24px', background: '#fff', minHeight: '100vh' }"
      >
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<style lang="scss" module>
@import '@design';
.sider {
  background-color: white;
}
.header {
  background-color: white;
  padding: 0;
}
.toggle {
  padding: 0 24px;
}
</style>
