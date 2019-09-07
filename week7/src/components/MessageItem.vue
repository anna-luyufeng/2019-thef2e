<script>
import { fromUnixTime, format } from 'date-fns'
import { authComputed } from '@src/store-helpers'
export default {
  filters: {
    formatTimestamp: function(timestamp) {
      return format(fromUnixTime(timestamp), 'k:mm')
    },
  },
  props: {
    content: {
      type: Object,
      default: () => {},
    },
    isFirst: {
      type: Boolean,
      default: false,
    },
    isLast: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...authComputed,
    sentByUser() {
      return this.content.user === this.currentUser.nickname
    },
  },
}
</script>
<template>
  <div
    :class="[
      `message message--${sentByUser ? 'sent' : 'received'} `,
      { 'message--first': isFirst, 'message--last': isLast },
    ]"
  >
    <div v-if="!sentByUser && isFirst" class="message-name">
      {{ content.user }}
    </div>
    <div class="message-content">
      <div class="message-bubble">
        {{ content.text }}
      </div>
      <div class="message-time">
        {{ content.timestamp | formatTimestamp }}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.message {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  + .message:not(.message--first) {
    margin-top: 10px;
  }
  &-name {
    color: rgba(white, 0.8);
    margin-bottom: 3px;
    font-size: 0.85rem;
  }
  &-content {
    display: flex;
    align-items: flex-end;
  }
  &-time {
    color: rgba(white, 0.8);
    font-size: 0.85rem;
  }
  &-bubble {
    max-width: 70%;
    display: flex;
    flex-direction: column;
    padding: 8px 16px;
    line-height: 1.25;
  }
  &--received {
    align-items: flex-start;
    .message-name {
      margin-left: 16px;
    }
    .message-bubble {
      padding-left: 22px;
      margin-right: 5px;
      background: rgba(white, 0.3);
      -webkit-mask-box-image: url("data:image/svg+xml;charset=utf-8,<svg height='35' viewBox='0 0 96 70' width='48' xmlns='http://www.w3.org/2000/svg'><path d='m96 35c1 7-5 37-42 35-37 2-43-28-42-35-1-7 5-37 42-35 37-2 43 28 42 35z'/></svg>")
        50% 42% 46% 56%;
      &--last {
        -webkit-mask-box-image: url("data:image/svg+xml;charset=utf-8,<svg height='35' viewBox='0 0 96 70' width='48' xmlns='http://www.w3.org/2000/svg'><path d='m96 35c1 7-5 37-42 35-37 2-43-28-42-35-1-7 5-37 42-35 37-2 43 28 42 35z'/><path d='m0 70c6-2 12-10 12-19v-16l14 27s-8 8-26 8z'/></svg>")
          50% 42% 46% 56%;
      }
    }
  }
  &--sent {
    align-items: flex-end;
    .message-name {
      margin-right: 16px;
    }
    .message-content {
      flex-direction: row-reverse;
    }
    .message-bubble {
      padding-right: 22px;
      margin-left: 5px;
      background: rgba(white, 0.5);
      -webkit-mask-box-image: url("data:image/svg+xml;charset=utf-8,<svg height='35' viewBox='0 0 96 70' width='48' xmlns='http://www.w3.org/2000/svg'><path d='m84 35c1 7-5 37-42 35-37 2-43-28-42-35-1-7 5-37 42-35 37-2 43 28 42 35z'/></svg>")
        50% 56% 46% 42%;
    }
  }
}
</style>
