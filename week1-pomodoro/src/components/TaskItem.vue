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
    working: {
      type: Boolean,
      default: false,
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
  <div :class="[$style.item, working ? $style['is-working'] : '']">
    <div>
      <template v-if="!compelete">
        <a-tooltip placement="top">
          <span slot="title">Start Task</span>
          <a-icon v-if="working" class="task-prefix" type="clock-circle" />
        </a-tooltip>
        <a-icon v-if="!working" class="task-prefix" type="play-circle" @click="onStart" />
      </template>

      <a-icon v-else class="task-prefix" type="check-circle" @change="onChange" />
      {{data.name}}
    </div>
    <div v-if="!compelete" :class="$style['item__tools']">
      <a-icon type="delete" />
      <a-icon type="edit" />
    </div>
  </div>
</template>
<style lang="scss" module>
@import '@design';
.item {
  &:hover {
    cursor: pointer;
    .item__tools {
      display: block;
    }
  }
  &.is-working {
    box-shadow: 0 2px 8px #f0f1f2;
    :global(.task-prefix) {
      color: $color-primary;
    }
  }
}
.item__tools {
  display: none;
}
</style>