
<script>
export default {
  name: "KingIcon",
  props: {
    mood: {
      type: String,
      default: "happy"
    }
  },
  computed: {
    imgSrc() {
      return require(`../assets/king_${this.mood}.png`);
    }
  }
};
</script>
<template>
  <img :src="imgSrc" :class="$style.image" />
</template>
<style lang="scss" module>
.image {
  max-width: 60px;
}
</style>


