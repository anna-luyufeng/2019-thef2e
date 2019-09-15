<script>
import Layout from "@views/_layout";
export default {
  components: {
    Layout
  }
};
</script>
<template>
  <div id="app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<style lang="scss">
@import "~normalize.css/normalize.css";
@import "@design";
@import "@src/design/global.scss";

#app {
  font-family: $system-default-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-text-primary;
  background: $color-background;
  min-height: 100vh;
}
</style>
