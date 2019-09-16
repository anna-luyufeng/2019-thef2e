<script>
import BaseButton from "@components/BaseButton";
export default {
  components: {
    BaseButton
  },
  data() {
    return {
      menuList: []
    };
  }
};
</script>
<template>
  <div class="app-container">
    <div class="sidebar-container">
      <h1 class="logo">FreeNote</h1>
      <BaseButton>新增筆記</BaseButton>
      <nav class="navbar">
        <ul>
          <li><router-link to="/">所有筆記</router-link></li>
          <li><router-link to="/">捷徑</router-link></li>
          <li><router-link to="/">標籤</router-link></li>
          <li><router-link to="/">月曆</router-link></li>
          <li><router-link to="/">與我共用</router-link></li>
          <li><router-link to="/">垃圾桶</router-link></li>
        </ul>
      </nav>

      <div class="sidebar-bottom">
        <div>模式</div>
        <div>Anna Lu</div>
      </div>
    </div>
    <div class="main-container">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@design";

.app-container {
  display: flex;
  flex-direction: row;
}
.sidebar-container {
  height: 100vh;
  min-width: 250px;
  max-width: 250px;
  background-color: $color-primary;
  color: white;
  padding: 30px;
  box-sizing: border-box;

  a {
    color: white;
    text-decoration: none;
  }
}
.sidebar-bottom {
  position: absolute;
  bottom: 30px;
}
.navbar {
  margin-top: 15px;
  li {
    padding: 10px 0;
  }
}
</style>
