
<script>
export default {
  name: "Card",
  props: {
    suit: String,
    value: [String, Number]
  },
  computed: {
    imgSrc() {
      return require(`../assets/${this.suit}_${this.value}.png`);
    }
  }
};
</script>
<template>
  <img :src="imgSrc" :class="$style.image" />
</template>

<style lang="scss" module>
.image {
  border-radius: 8px;
  border: 1px solid #cccccc;
  background: white;
}
</style>
