<script>
export default {
  directives: {
    'edit-focus': function(el, binding) {
      if (binding.value) {
        el.focus()
      }
    },
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    working: {
      type: Boolean,
      default: false,
    },
    editing: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onCancelEdit() {
      this.$emit('cancel-edit', this.data)
    },
    onFinishEdit() {
      this.$emit('edited', this.data)
    },
    onEdit() {
      this.$emit('edit', this.data)
    },
    onDelete() {
      this.$emit('delete', this.data)
    },
    onChange() {
      this.$emit('checked', this.data)
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
      <a-input
        v-show="editing"
        v-model="data.name"
        v-edit-focus="editing"
        @pressEnter="onFinishEdit"
        @blur="onFinishEdit"
        @keyup.esc="onCancelEdit"
      />
      <div v-show="!editing">
        <input
          :id="`task-${data.id}`"
          :class="$style.radio"
          :checked="data.compelete"
          type="checkbox"
          @change="onChange"
        />
        <label :for="`task-${data.id}`">
          <span :class="$style['label-text']">{{data.name}}</span>
        </label>
      </div>
    </div>
    <div v-if="!data.compelete" :class="$style['item__actions']">
      <div :class="$style['item__tools']">
        <a-tooltip placement="top">
          <span slot="title">Delete Task</span>
          <a-icon type="delete" @click="onDelete" />
        </a-tooltip>
        <a-tooltip placement="top">
          <span slot="title">Edit Task</span>
          <a-icon type="edit" @click="onEdit" />
        </a-tooltip>
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
    opacity: 1;
    transform: scale(1);
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
  &__title {
    flex: 1;
  }
  &__tools {
    opacity: 0;
    transform: scale(0.1);
    transition: all 0.2s ease;

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
      transform: scale(0) rotate(45deg);
      transition: transform 0.25s linear;
    }
  }

  &:checked,
  &:hover {
    & + label:after {
      transform: scale(1) rotate(45deg);
    }
    & + label .label-text:after {
      content: ' ';
      position: absolute;
      top: 50%;
      left: 30px;
      height: 1px;
      background: black;
      animation: strike 0.25s linear 1 forwards;
    }
  }
}
@keyframes strike {
  0% {
    width: 0;
  }
  100% {
    width: calc(100% - 30px);
  }
}
</style>