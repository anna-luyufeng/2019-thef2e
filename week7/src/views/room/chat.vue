<script>
import { Icon, Uploader, Image, Toast } from 'vant'
import Layout from '@views/_layout'
import MessageItem from '@components/MessageItem'
import DB from '@src/firebase'
import { authComputed } from '@src/store-helpers'

export default {
  name: 'Chat',
  props: {
    roomName: {
      type: String,
      required: true,
    },
  },
  components: {
    Layout,
    MessageItem,
    [Icon.name]: Icon,
    [Uploader.name]: Uploader,
    [Image.name]: Image,
    [Toast.name]: Toast,
  },
  data() {
    return {
      loadedMessages: [],
      messageToSend: '',
      showEmojiPicker: false,
    }
  },
  computed: {
    ...authComputed,
    messageIds() {
      return Object.keys(this.loadedMessages)
    },
  },
  created() {
    this.getMessageList()
  },
  methods: {
    afterUpload() {},
    isFirstMessage(message, messageIndex) {
      const previousId = this.messageIds[messageIndex - 1]
      const previousMessage = this.loadedMessages[previousId]
      if (!previousMessage || previousMessage.user !== message.user) return true
      return false
    },
    isLastMessage(message, messageIndex) {
      const nextId = this.messageIds[messageIndex + 1]
      const nextMessage = this.loadedMessages[nextId]
      if (!nextMessage || nextMessage.user !== message.user) return true
      return false
    },
    getMessageList() {
      DB.ref(`messages/${this.$route.params.roomId}`)
        .orderByChild('timestamp')
        .on('value', (snapshot) => {
          this.loadedMessages = snapshot.val()
        })
    },
    onSubmitMessage() {
      const text = this.messageToSend.replace(/\n/g, '').trim()
      if (text.length <= 0) return
      const messageId = Math.floor(Date.now() / 1000)
      DB.ref(`messages/${this.$route.params.roomId}`)
        .child(messageId)
        .set({
          timestamp: messageId,
          user: this.currentUser.nickname,
          text,
        })
      this.messageToSend = ''
    },
    toggleEmojiPicker() {
      // TODO:
      this.$toast({
        message: '時間不夠，之後會再好好研究補上滴！',
        icon: 'smile-o',
      })

      // this.showEmojiPicker = !this.showEmojiPicker
    },
  },
}
</script>
<template>
  <Layout :title="roomName" left-back @back="$router.go(-1)" no-margin>
    <MessageItem
      v-for="(message, _, messageIndex) in loadedMessages"
      :key="message.timestamp"
      :content="message"
      :is-first="isFirstMessage(message, messageIndex)"
      :is-last="isLastMessage(message, messageIndex)"
    />
    <div slot="toolbar">
      <div class="messagebar">
        <div class="messagebar-area">
          <textarea
            v-model="messageToSend"
            @keyup.enter="onSubmitMessage"
            class="messagebar-input"
          ></textarea>
          <div class="messagebar-emoji" @click="toggleEmojiPicker">
            <van-icon name="smile-o" size="24px"
          /></div>
        </div>
        <div class="messagebar-action">
          <van-uploader :after-read="afterUpload">
            <van-icon name="photo-o" size="24px" />
          </van-uploader>
        </div>
      </div>
      <div class="emoji-picker" v-show="showEmojiPicker">
        <van-image
          v-for="number in 30"
          :key="`emoji-${number}`"
          round
          class="emoji-item"
          :src="require(`@assets/emoji/e${number}.png`)"
        />
      </div>
    </div>
  </Layout>
</template>
<style lang="scss" scoped>
.messagebar {
  display: flex;
  align-items: center;
  &-area {
    position: relative;
    flex-grow: 1;
    margin-right: 20px;
  }
  &-input {
    background-color: rgba(white, 0.3);
    height: 40px;
    border-radius: 20px;
    border: none;
    width: 100%;
    box-sizing: border-box;
    padding: 6px 15px;
  }
  &-emoji {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  &-action {
    flex-shrink: 0;
  }
}
.emoji {
  &-picker {
    padding: 10px 0;
  }

  &-item {
  }
}
</style>
