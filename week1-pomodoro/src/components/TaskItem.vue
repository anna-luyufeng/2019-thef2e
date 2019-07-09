<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    compelete: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      checked: false,
    }
  },
  methods: {
    onChange(e) {
      this.$emit('update:compelete', e.target.checked)
    },
    onStart() {
      this.$emit('start', this.data)
    },
  },
}
</script>
<template>
  <div>
    <a-checkbox :checked="compelete" @change="onChange">{{
      data.name
    }}</a-checkbox>
    <a-button v-if="!compelete" @click="onStart">Start Task</a-button>
  </div>
</template>
