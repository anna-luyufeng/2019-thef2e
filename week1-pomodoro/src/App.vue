<template>
  <div id="app">
    <RouterView :key="$route.fullPath" />
  </div>
</template>
<style lang="scss">
@import '@design';

#app {
  font-family: $system-default-font-family;
}
</style>