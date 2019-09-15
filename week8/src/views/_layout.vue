<script>
import BaseButton from "@components/BaseButton";
export default {
  components: {
    BaseButton
  },
  data() {
    return {};
  }
};
</script>
<template>
  <div class="container">
    <div class="sidebar">
      <div class="sidebar__logo">
        <img src="~@assets/logo.svg" alt="" />
      </div>
      <BaseButton>上傳檔案</BaseButton>

      <BaseButton type="text">上傳資料夾</BaseButton>
      <BaseButton type="text">共享資料夾</BaseButton>
      <BaseButton type="text">已標記星號</BaseButton>
      <BaseButton type="text">垃圾桶</BaseButton>
    </div>
    <main class="main-container">
      <slot></slot>
    </main>
    <div class="monster-wrapper">
      <div class="monster__bubble">
        本週太忙惹，心力交瘁。只能大概切個版Ｑ＿Ｑ（難過）
      </div>
      <img class="monster" src="~@assets/monster.svg" alt="" />
    </div>
  </div>
</template>
<style lang="scss">
.container {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
}
.sidebar {
  padding: 25px;
  box-sizing: border-box;
  height: 100vh;
  min-width: 25%;
  background-color: #2f3136;
  &__logo {
    text-align: center;
    margin-bottom: 15px;
  }
}
.main-container {
  padding: 30px;
}
.monster {
  &-wrapper {
    position: absolute;
    left: 0;

    bottom: 0;
  }
  transform: translate(-50%, 30%) rotate(20deg);
  &__bubble {
    background: white;
    color: #2f3136;
    padding: 20px;
    width: 210px;
    border-radius: 16px;
    top: 10px;
    position: absolute;
    left: 50px;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 28px solid transparent;
      border-top-color: white;
      border-bottom: 0;
      border-left: 0;
      margin-left: -14px;
      margin-bottom: -28px;
    }
  }
}
</style>
