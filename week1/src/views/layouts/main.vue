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
      breakpoint="lg"
      collapsed-width="0"
      :class="$style.sider"
      :trigger="null"
      collapsible
    >
      <div :class="$style.menu">
        <a-avatar :class="$style.avatar" :size="64" icon="user" />
        <SideMenu />
      </div>

      <div :class="$style.bottom">
        <a
          href="https://github.com/littlegreening/2019-thef2e/tree/master/week1-pomodoro"
          target="_blank"
        >
          <a-icon type="github" />
        </a>
      </div>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :class="$style.header">
        <a-icon
          :class="$style.toggler"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <span :class="$style.title">Pomodoro</span>
      </a-layout-header>
      <a-layout-content :style="{ minHeight: 'calc(100vh - 94px)', margin: '15px' }">
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<style lang="scss" module>
@import '@design';
.sider {
  :global(.ant-layout-sider-children) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .menu {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .avatar {
    margin-bottom: 30px;
  }
  .bottom {
    line-height: 48px;
    font-size: 1rem;
    padding: 25px 0;
  }
}

.header {
  background-color: $color-primary;
  padding: 0;
  color: white;
  .title {
    text-transform: uppercase;
    float: right;
    padding-right: 15px;
    letter-spacing: 0.1em;
  }
}
.toggler {
  padding: 0 15px;
}
</style>
