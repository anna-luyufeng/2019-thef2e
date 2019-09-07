<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '~normalize.css/normalize.css';
@import '@design';
@import '@src/design/global.scss';

#frame {
  position: absolute;
}
#app {
  font-family: $system-default-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url('~@assets/background.png');
  background-size: cover;
  min-height: 100vh;
  color: white;
  background-attachment: fixed;
}
</style>
