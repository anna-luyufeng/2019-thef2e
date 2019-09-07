<script>
import { Swipe, SwipeItem, Image, CellGroup, Field, Button, Icon } from 'vant'
import Layout from '@views/_layout'
import 'vant/lib/button/style/less'
import 'vant/lib/field/style/less'

import DB from '@src/firebase'

export default {
  components: {
    Layout,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button,
    [Icon.name]: Icon,
  },
  data() {
    return {
      submitData: {
        avatarId: 1,
        name: '',
        intro: '',
      },
    }
  },
  methods: {
    onAvatarChange(index) {
      this.submitData.avatarId = index + 1
    },
    onClickAvatarNav(direction) {
      const nextIndex =
        direction === 'right'
          ? this.submitData.avatarId
          : this.submitData.avatarId - 2
      this.$refs.avatar.swipeTo(nextIndex)
    },
    tryToAddRoom(postData) {
      const newRoomId = DB.ref('rooms').push().key
      DB.ref(`rooms/topic${newRoomId}`).set(
        {
          ...postData,
          lastMessage: '',
          timestamp: Math.floor(Date.now() / 1000),
        },
        (error) => {
          if (error) {
            console.log(error)
          } else {
            this.$router.push({ name: 'RoomList' })
          }
        }
      )
    },
  },
}
</script>
<template>
  <Layout title="創建星球" left-back @back="$router.go(-1)">
    <van-swipe ref="avatar" @change="onAvatarChange" class="avatar">
      <van-swipe-item v-for="number in 3" :key="number">
        <van-image round :src="require(`@assets/room_avatar${number}.png`)" />
      </van-swipe-item>
      <div slot="indicator">
        <van-icon
          class="swipe-navigation swipe-navigation--left"
          name="arrow-left"
          @click="onClickAvatarNav('left')"
        />
        <van-icon
          class="swipe-navigation  swipe-navigation--right"
          name="arrow"
          @click="onClickAvatarNav('right')"
        />
      </div>
    </van-swipe>

    <van-cell-group class="form">
      <van-field
        v-model="submitData.name"
        placeholder="星球主題"
        maxlength="6"
      />
      <van-field
        v-model="submitData.intro"
        placeholder="星球簡介"
        maxlength="20"
        type="textarea"
        rows="2"
      />
    </van-cell-group>
    <van-button
      type="primary"
      :disabled="!submitData.name || !submitData.intro"
      block
      @click="tryToAddRoom(submitData)"
      >創建此星球</van-button
    >
  </Layout>
</template>
<style lang="scss" scoped>
.avatar {
  text-align: center;
  margin-bottom: 50px;
}
.swipe-navigation {
  color: #654d8d;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  &--left {
    left: 10%;
  }
  &--right {
    right: 10%;
  }
}
.form {
  margin-bottom: 40px;
}
</style>
