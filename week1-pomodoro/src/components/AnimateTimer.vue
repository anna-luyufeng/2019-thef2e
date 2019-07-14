<script>
export default {
  props: {
    time: {
      type: String, // 1234
      required: true,
    },
    separator: {
      type: String,
      default: ':',
    },
    separatDigits: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      counter: 10,
    }
  },
  computed: {
    timeSplitByDigit() {
      const regex = `(\\d)(?=(\\d{${this.separatDigits}})+(?!\\d))`
      const numberWithSeperator = this.time.replace(
        new RegExp(regex, 'g'),
        `$1${this.separator}`
      )
      return numberWithSeperator.split('')
    },
  },
}
</script>
<template>
  <div :class="$style.row">
    <div
      v-for="(number, index) in timeSplitByDigit"
      :key="index"
      :class="$style.column"
      :style="{ 'transform': `translateY(-${ ((number === separator) ? 1 : +number + 1) * +$style['row-height']}px)` }"
    >
      <span v-if="number === separator" :class="$style.counter">{{ number}}</span>
      <span v-for="(_,count) in counter" v-else :key="count" :class="$style.counter">{{count}}</span>
    </div>
  </div>
</template>
<style lang="scss" module>
@import '@design';
$height: 80px;
@function strip-unit($number) {
  @if type-of($number) == 'number' and not unitless($number) {
    @return $number / ($number * 0 + 1);
  }

  @return $number;
}
.row {
  // color: white;
  --row: #{$height};
  display: grid;
  grid: var(--row) / auto-flow auto;
  justify-content: center;
  overflow: hidden;
}
.column {
  padding-top: var(--row);
  transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1),
    margin 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0.4s,
    -webkit-transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.counter {
  display: block;
  font-size: $height;
  line-height: var(--row);
  font-weight: 500;
  margin: 0;
}
:export {
  row-height: strip-unit($height);
}
</style>