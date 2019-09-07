<script>
import { Divider, CellGroup, Field, Button, Image } from 'vant'
import 'vant/lib/button/style/less'
import 'vant/lib/field/style/less'

export default {
  components: {
    [Divider.name]: Divider,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button,
    [Image.name]: Image,
  },
  data() {
    return {
      nickname: '',
    }
  },
  methods: {
    tryToLogin() {
      const userNickname = this.nickname
        ? this.nickname
        : Math.random()
            .toString(36)
            .substring(2, 15) +
          Math.random()
            .toString(36)
            .substring(2, 15)
      this.$store.dispatch('logIn', userNickname).then(() => {
        this.$router.push({ name: 'Home' })
      })
    },
    tryToFBLogin() {},
  },
}
</script>

<template>
  <div :class="$style.container">
    <van-image :src="require(`@assets/logo.png`)" />
    <van-cell-group>
      <van-field v-model="nickname" placeholder="輸入您的暱稱" maxlength="8" />
    </van-cell-group>

    <van-button type="primary" :disabled="!nickname" block @click="tryToLogin"
      >使用此暱稱進入聊天室</van-button
    >
    <!-- <van-button type="primary" block @click="tryToFBLogin"
      >Facebook 登入</van-button
    > -->
    <van-divider>或</van-divider>
    <van-button type="primary" block @click="tryToLogin">匿名聊天</van-button>
  </div>
</template>
<style lang="scss" module>
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 50px);
}
</style>
