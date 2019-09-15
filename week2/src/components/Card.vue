
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
  <img :src="imgSrc" :class="$style.image" @mousedown="(event) => $emit('mousedown', event)" />
</template>

<style lang="scss" module>
@import "@design";
.image {
  border-radius: 8px;
  border: 1px solid #cccccc;
  background: white;
  transition: all 0.5s cubic-bezier(0, 0.785, 0, 1);
  &:hover {
    box-shadow: 0 0 0 2px $color-primary;
  }
}
</style>
