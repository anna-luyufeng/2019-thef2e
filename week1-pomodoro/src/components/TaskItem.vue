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
      console.log(e.target.checked)
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
    <div :class="$style['item__title']">
      <input
        :id="`task-${data.id}`"
        :class="$style.radio"
        :checked="data.compelete"
        type="checkbox"
        @change="onChange"
      />
      <label :for="`task-${data.id}`">{{data.name}}</label>
    </div>
    <div v-if="!compelete" :class="$style['item__actions']">
      <div :class="$style['item__tools']">
        <a-icon type="delete" />
        <a-icon type="edit" />
      </div>

      <a-icon v-if="working" class="task-suffix" type="clock-circle" />
      <a-tooltip v-else placement="top">
        <span slot="title">Start Task</span>
        <a-icon type="play-circle" class="task-suffix" @click="onStart" />
      </a-tooltip>
    </div>
  </div>
</template>
<style lang="scss" module>
@import '@design';
.item {
  &:hover .item__tools {
    display: flex;
  }
  &.is-working {
    box-shadow: 0 2px 8px #f0f1f2;
    :global(.task-suffix) {
      color: $color-primary;
    }
  }
  &__title,
  &__actions {
    display: flex;
    align-items: center;
  }
  &__tools {
    display: none;
    :global(.anticon) {
      padding: 0 10px;
    }
  }
  :global(.anticon) {
    cursor: pointer;
  }
}
.radio {
  position: absolute;
  opacity: 0;
  & + label {
    position: relative;
    cursor: pointer;
    &:before {
      content: '';
      margin-right: 10px;
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid $color-border-base;
      border-radius: 50%;
      vertical-align: middle;
    }
  }

  &:checked,
  &:hover {
    & + label {
      text-decoration: line-through;
      &:after {
        content: '';
        position: absolute;
        left: 5px;
        top: 50%;
        background: $color-border-base;
        width: 2px;
        height: 2px;
        box-shadow: 2px 0 0 $color-border-base, 4px 0 0 $color-border-base,
          4px -2px 0 $color-border-base, 4px -4px 0 $color-border-base,
          4px -6px 0 $color-border-base, 4px -8px 0 $color-border-base;
        transform: rotate(45deg);
      }
    }
  }
}
</style>