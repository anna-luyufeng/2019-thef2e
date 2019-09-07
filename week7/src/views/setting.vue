<script>
import { CellGroup, Field, Button, SwitchCell } from 'vant'
import 'vant/lib/switch-cell/style/less'
import 'vant/lib/field/style/less'

import Layout from '@views/_layout'
import { authComputed } from '@src/store-helpers'

export default {
  name: 'Setting',
  components: {
    Layout,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button,
    [SwitchCell.name]: SwitchCell,
  },
  data() {
    return {
      submitData: {
        nickname: '',
        allowSendMessage: false,
      },
    }
  },
  computed: {
    ...authComputed,
  },
  created() {
    this.submitData = Object.assign({}, this.currentUser)
  },
  methods: {
    tryToUpdate() {},
    tryToFBLogin() {},
  },
}
</script>
<template>
  <Layout title="個人設定">
    <van-cell-group>
      <van-field
        v-model="submitData.nickname"
        label="修改暱稱"
        placeholder="輸入您的暱稱"
        maxlength="8"
      />
      <!-- <van-button type="primary" block @click="tryToFBLogin"
        >綁定 Facebook</van-button
      > -->
      <van-switch-cell
        v-model="submitData.allowSendMessage"
        title="開放私聊"
        label="若關閉私聊，您將不會出現在「尋覓星人」清單上。"
      />
    </van-cell-group>
    <van-button type="primary" block @click="tryToUpdate">儲存變更</van-button>
  </Layout>
</template>
